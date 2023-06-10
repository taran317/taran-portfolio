Sports betting is a form of betting that involves wagering on the outcome of, well, sports. According to the Pew Research Center, 19% of U.S. adults say they have bet money on sports in the past year. It's a big deal.

In Spring 2023, I took CIS 5500 (Databases & Information Systems) at Penn. As someone who loves sports and data-driven decision-making, I thought it would be fun to build a platform to explore sports betting data related to the NBA as my final project. So I teamed up with a couple friends and we built [Sports Betting Analytics](https://github.com/taran317/sports-betting).

Our motivations for this project were threefold. First, we aimed to provide users with access to aggregate and comparison data that would enable them to gain valuable insights about teams, players, and games across multiple NBA seasons. By analyzing comprehensive statistics, users could make more informed decisions when it came to sports betting.

Secondly, we wanted to enhance the user experience by incorporating trivia facts related to NBA teams, players, and games. These trivia facts would not only entertain users but also deepen their understanding of the NBA and its dynamics.

Finally, we aimed to serve as an entry point into the world of sports analytics, particularly in the context of sports betting. We wanted to demystify the complexities surrounding sports betting by offering users a platform where they could explore and comprehend various aspects of this domain. Through interactive analytics and comprehensive data comparisons, users could navigate the intricacies of sports betting and make educated decisions.

<br />
<img src="https://images2.imgbox.com/00/e1/JmWUoLnU_o.png" alt="Preview" border="0" width="100%" height="100%" />
<em><center>Preview</center></em>
<br />

## Data Process

The data process involves collecting, cleaning, and organizing data from various sources to form one cohesive database populated by 5 tables. Data is sourced mainly from 7 CSV files, which are all cleaned, modified, and merged to form the current database with five tables. I primarily sourced the datasets from Kaggle, a website that hosts a variety of datasets for free.

The Sports Betting Analytics database was designed to adhere to the Third Normal Form (3NF) for data integrity and efficiency. This involved removing redundant columns and moving auxiliary player and team information to separate tables. By standardizing IDs and eliminating dependencies, the database maintains a streamlined structure for consistent and optimized data querying and analysis.

<br />
<img src="https://images2.imgbox.com/ba/a6/b9E6pyfR_o.png" alt="Database Tables" border="0" width="100%" height="100%" />
<em>
<center>Database Tables</center>
</em>
<br />

### Data Cleaning

Data cleaning was a crucial step in preparing the Sports Betting Analytics app. Initially, the data obtained from the Kaggle website required adjustments to ensure consistency across files. I aligned the years in the datasets and manually added team names to our CSVs. Specifically, I merged three CSVs related to money lines, spreads, and totals into a single CSV for betting data.

To streamline the datasets, we focused on reducing redundancy and ensuring data consistency. This involved identifying and including only the common games across player game stats, team game stats, and betting data CSVs. Additionally, we removed unnecessary columns, such as the book_id column, as it was redundant with the book_name column. These data cleaning tasks were performed using Pandas and Numpy in a Python notebook.

### Entity Resolution

Entity resolution was a crucial step in improving the data quality for the Sports Betting Analytics app. We standardized team names and IDs, linked related data using unique identifiers, and resolved player ambiguities using additional information like birthdays, jersey numbers, and team affiliations. We also standardized date formats, addressed missing or inconsistent data, and removed duplicates. These efforts enhanced the reliability of the data for accurate analysis and insights.

<br />
<img src="https://images2.imgbox.com/79/0d/p39m4Ygi_o.png" alt="Entity Resolution" border="0" width="100%" height="100%" />
<em>
<center>Entity Resolution</center>
</em>
<br>

### Application Stack

For this project, I really wanted to try using Chakra UI (the same library used to make this website). Our stack was MySQL (AWS RDS) for the database, Node.js (Express) for the backend, and React + Chakra UI for the frontend. We deployed the app on Heroku (although we have since shut it down due to costs).

### Complex Queries

Here is an example of a complex query that I wrote to find how often each player has covered the spread in their games over the course of their career sorted in descending order of spread success percentage. The query is a bit long, but it's a good example of how to use CTEs to simplify complex queries. Before optimizing this query, it took about 9 seconds to run. After several optimizations, it takes about 0.7 seconds to run.

```sql
WITH total_games AS (
    SELECT P.player_id, COUNT(*) AS total_games
    FROM player_stats P
    GROUP BY P.player_id
    HAVING total_games >= 50
), pts_difference AS (
    SELECT G1.pts - G2.pts AS pts_difference, G2.pts - G1.pts AS pts_difference2, G1.game_id
    FROM game_data G1
    JOIN game_data G2 ON G1.game_id = G2.game_id AND G1.a_team_id = G2.team_id
    WHERE G1.is_home = 'f'
), spread_covers1 AS (
    SELECT COUNT(B.game_id) AS count, PS.player_id
    FROM player_stats PS
    JOIN (
        SELECT DISTINCT B.game_id, B.team_id
        FROM betting_data B
        JOIN pts_difference G ON B.game_id = G.game_id AND pts_difference2 < B.spread1
    ) B ON PS.team_id = B.team_id AND PS.game_id = B.game_id
    GROUP BY PS.player_id
), spread_covers2 AS (
    SELECT COUNT(B.game_id) AS count, PS.player_id
    FROM player_stats PS
    JOIN (
        SELECT DISTINCT B.game_id, B.a_team_id
        FROM betting_data B
        JOIN pts_difference G ON B.game_id = G.game_id AND pts_difference < B.spread2
    ) B ON PS.team_id = B.a_team_id AND PS.game_id = B.game_id
    GROUP BY PS.player_id
)
SELECT P.person_id, P.display_first_last, S1.count + S2.count AS count, TG.total_games,
    (S1.count + S2.count) / TG.total_games AS spread_percentage
FROM total_games TG
JOIN spread_covers1 S1 ON TG.player_id = S1.player_id
JOIN spread_covers2 S2 ON TG.player_id = S2.player_id
JOIN players P ON TG.player_id = P.person_id
ORDER BY spread_percentage DESC;
```

Here's another interesting query which finds arbitrage opportunities in the historical betting data. Arbitrage betting is when odds line up between two different books on the same game such that you can guarantee a profit by betting a certain amount on one provider and a certain amount on the other provider. The arbitrage percentage is a measure of how drastic the difference in odds are. An opportunity is profitable only if the arbitrage percentage is less than 100%.

```sql
SELECT
    B1.book_name AS book1,
    B2.book_name AS book2,
    B1.spread_price1,
    B2.spread_price2,
    G.matchup,
    G.game_date,
    1 / IF(B1.spread_price1 < 0, 1 + 100 / ABS(B1.spread_price1), B1.spread_price1 / 100 + 1)
      + 1 / IF(B2.spread_price2 < 0, 1 + 100 / ABS(B2.spread_price2), B2.spread_price2 / 100 + 1) AS arbitrage_percentage
FROM
    betting_data B1
    JOIN betting_data B2 ON B1.game_id = B2.game_id
    JOIN game_data G ON B1.game_id = G.game_id AND B1.team_id = G.team_id
WHERE
    1 / IF(B1.spread_price1 < 0, 1 + 100 / ABS(B1.spread_price1), B1.spread_price1 / 100 + 1)
      + 1 / IF(B2.spread_price2 < 0, 1 + 100 / ABS(B2.spread_price2), B2.spread_price2 / 100 + 1) < 1
ORDER BY
    arbitrage_percentage
LIMIT ?
OFFSET ?;
```

Note that the ?'s are placeholders for parameters that are passed in from the frontend. The LIMIT and OFFSET parameters are used for pagination.

### Query Optimization

Our primary approach to optimization involved restructuring queries by utilizing temporary tables and optimizing selections and projections. We focused on improving the efficiency of computation-intensive queries and retrieving data indexed by the primary key. Creating indexes did not yield significant improvements in query response times for our specific use case. And in terms of caching, this was a bit challenging as it seems that MySQL’s query caching seems to be [deprecated](https://dev.mysql.com/doc/refman/5.7/en/query-cache.html).

<br />
<img src="https://images2.imgbox.com/05/3c/lnhzNAVF_o.png" alt="Complex Query Optimization" border="0" width="100%" height="100%" />
<em><center>Complex Query Optimization</center></em>
<br />

_Note that since the 22-second top scoring matchups query is static, we created an auxiliary table to store the results of the query and retrieve the results from the table instead of running the query every time. This further reduced the query response time to under a second, making it practical to run on every page load._

## Demo

<br />
![Click to view demo](/images/sports-betting-demo.gif)
<em><center>Click to view demo</center></em>
<br />

Note that the app is no longer live on Heroku and the database has been shut down due to costs. However, you can still view the demo above and check out the code on [GitHub](https://github.com/taran317/sports-betting).
