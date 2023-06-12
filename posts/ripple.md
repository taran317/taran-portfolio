When I joined the startup Ripple Interactive in April 2022, I became one of the first engineers tasked with building key features for the application. Ripple stood out from other social media platforms due to its unique capability of enabling users to connect with nearby individuals (within 100m) using Bluetooth Low Energy. This feature, called Ripplink, was designed with the intention of facilitating connections and fostering new friendships among college students.

At the time of my arrival, the app had already been launched in a basic form, supporting group messaging and user discovery. However, it suffered from low user retention and engagement. With a deadline set for August, I set out to address these issues and enhance the app's functionality.

### What's Happening

My initial focus was on introducing a new feature called _What's Happening_, which consisted of a feed displaying posts from nearby users. This was a complex undertaking, requiring the implementation of various functionalities such as posting, commenting, liking, blocking, reporting, and direct messaging. This feature aimed to provide users with a feed of posts from people nearby, fostering a sense of community and enabling them to stay updated on local events and discussions. The development effort encompassed both the frontend and backend aspects of the application.

On the backend, I used Django to build the API endpoints for the feature. PostgreSQL served as the database storage solution for the posts and user data, allowing for efficient data retrieval and management. I developed the frontend for the iOS app using Swift + SwiftUI, which allowed me to build a responsive and intuitive user interface.

Ensuring a smooth and responsive user experience was a key aspect of building the _What's Happening_ feature. As the number of users and posts increased, the performance and scalability of the system became critical. I conducted thorough performance optimizations, including efficient data fetching and caching strategies. By optimizing database queries and implementing pagination techniques, I was able to maintain fast loading times and a seamless scrolling experience, even with a large volume of content in the feed.

<br />
<img src="https://i.ibb.co/5KCcN3J/demo.png" alt="What's Happening Features" border="0" width="100%" height="100%" />
<em> <center> <i> What's Happening </i> Features </center> </em>
<br />

### Addressing Privacy Concerns

Since I joined Ripple, I felt that the app's reliance on Bluetooth and constant location tracking was a major privacy concern. I was concerned that users would not be comfortable with the app tracking their location and broadcasting their presence to nearby users.

I wanted to develop a feature that would allow users to use the app without the need to enable Bluetooth or constant location tracking. Instead, users would have the flexibility to update their location manually whenever they desired. By putting the power in the hands of the users, I ensured that they had full control over who could find them on the app.

After pitching my idea directly to the CEO, I developed an MVP for the feature. The development process involved careful consideration of the app's existing architecture and data flow. I had to identify the key components that needed modification or integration to support the manual location update functionality. Working with the backend infrastructure built on Django and PostgreSQL, I designed and implemented new API endpoints to handle user preferences and location updates. This required integration with the existing system while maintaining the necessary privacy safeguards.

### Result + Reflection

The months of dedicated work in a Silicon Valley garage culminated in the successful launch of the features I'd developed for Ripple's iOS app in August 2022. Being part of a small team at Ripple meant I had to wear many hats and shoulder various responsibilities, involving myself in every step of the development process. From ideation to UI design to backend implementation, I helped bring the app to life. And since it was my first time working on a mobile app, I learned a lot of new technologies along the way.
