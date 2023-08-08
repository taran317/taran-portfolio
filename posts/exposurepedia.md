Exposurepedia is the first-ever encyclopedia for exposure therapies, and it is currently being adopted as a valuable tool by clinicians around the world. It is a project I've spent a year working on as Technical Lead @ [Hack4Impact](https://hack4impact.org/) at the University of Pennsylvania. In short, Hack4Impact is a student organization that builds software for non-profits.

Exposure therapy is a type of cognitive behavioral therapy that helps people overcome their fears. For example, if someone is afraid of dogs, they might be asked to pet a dog. At a high level, the idea is that the more you are exposed to your fear, the less afraid you will be (there is a rich body of research focused on understanding the [mechanisms for why exposure therapy works](https://www.sciencedirect.com/science/article/pii/S0272735804001187?casa_token=-DEh9tyl8eYAAAAA:qbuCJSOhPh1atTl831SrhJdf2kZs64_32u_T5NyRcJRSmv1ysItdtBqwnCd7uMy1bcvd0B9vclNX)).

[Rachel Schwartz, Ph.D.](https://www.med.upenn.edu/ctsa/Rachel_Schwartz.html), a postdoctoral fellow at the Center for the Treatment and Study of Anxiety (CTSA) at the University of Pennsylvania, reached out to us and shared her experience as a clinical psychologist and research fellow who does exposure therapy on her patients. She explained the pain points she and other clinicians face when trying to find and share exposure therapies.

Exposure therapy is a very effective treatment for anxiety disorders with years of robust research supporting its efficacy. However, exposure therapies are extremely underutilized in clinical practice. One reason for this is that clinicians often have to spend hours searching for exposure therapies, and that they often have to create their own exposure therapies from scratch. They also often have to share their exposure therapies with other clinicians, but this process is very time-consuming and inefficient.

Rachel tried to address this problem by creating a spreadsheet of exposure therapies along with a Wordpress website which displayed exposure therapies.

<br />

<img src="https://images2.imgbox.com/eb/8a/MLlQIXYO_o.png" alt="Wordpress Site" border="0" width="100%" height="100%" />
<em><center>Wordpress Site</center></em>

However, this solution was not ideal:

- The Wordpress site was not at all user-friendly
- Searching for disorders did not return relevant exposure therapies
- Adding new exposure therapies required a lot of manual work and technical knowledge
- Nested disorders categories were not supported (i.e. OCD -> Existential -> Fear of Wasting Time)

## The Solution

Along with my friends Ziya Xu and Katherine Wang in Hack4Impact, we decided to build a web application that would address these pain points.

We invested significant time in the design phase, using Figma to construct an optimal user experience. Iterating on the design through multiple cycles, constantly seeking feedback from Rachel, who in turn reached out to clinicians for their valuable input. We ended up with a design that was both intuitive and functional.

<br />

<img src="https://images2.imgbox.com/11/0e/qIbIAfud_o.png" alt="Figma Design" border="0" width="100%" height="100%" />
<center><em>First design </em>🤮</center>

<br />

<img src="https://images2.imgbox.com/ef/eb/1uC7WAdq_o.png" alt="Figma Design" border="0" width="100%" height="100%" />
<center><em>Final design </em>😍</center>

I managed 8 talented Hack4Impact developers to build the application, and I developed as well. We used the MERN stack (MongoDB, Express, React, Node) and [Material-UI](https://material-ui.com/) for the frontend design, building on top of the Hack4Impact [boilerplate](https://github.com/hack4impact-upenn/boilerplate-s2022). The boilerplate, which I helped develop in Spring 2022, handles authentication, database connections, and other boilerplate code that is common to most web applications.

### Filter & Search

<br />
<img src="https://images2.imgbox.com/d8/7e/bkO7xXda_o.png" alt="Filter & Search" border="0" width="100%" height="100%" />
<em><center>Filter, search, & add to hierarchy/hierarchies</center></em>

The most important feature of the application is the ability to precisely filter and search for exposure therapies. Clinicians can filter by a variety of criteria, including exposure title, disorder, format, intervention type, keywords, and more. They can also sort on any column. The search, filter, and sort functionality is implemented with MongoDB's aggregation pipeline, which allows us to perform complex queries on the database.

Given the complex nested structure of disorder categories, we faced some unique challenges in implementing the Exposurepedia page. For example, managing tags for selected disorder categories turned out to be more complex than expected due to a lot of edge cases. For example, selecting a disorder shouldn't display all subcategories, but deselecting a subdisorder should also deselect the parent disorder and show the remaining subdisorders. The reverse should also hold true. To solve this, we traverse relevant parts of the disorder graph with BFS when a disorder is selected or deselected, enabling dynamic updates of the tags. [Prof. Rajiv Gandhi](https://directory.seas.upenn.edu/rajiv-gandhi/) would be so proud!

### Hierarchies

A hierarchy is a collection of exposure therapies that are grouped together. It provides clinicians with a structured way to organize and manage exposure therapies for their patients. Clinicians can create hierarchies and add exposure therapies to them.

For example, a clinician might create a hierarchy called "Fear of Dogs" and add exposure therapies that involve petting dogs. They can then use this hierarchy to track the progress of their patients who are afraid of dogs.

Clinicians can then assign SUDS (Subjective Units of Distress Scale) scores to each exposure item in a hierarchy, and then sort by SUDS score. SUDS scores are a measure of how much distress a patient feels when they are exposed to their fear. This allows clinicians to track the progress of their patients over time. Hierarchies can then be exported to .csv files, so clinicians can maintain them in Excel, the way most are used to.

<br />
<img src="https://images2.imgbox.com/7a/aa/D3YrqHVD_o.png" alt="Example hierarchy" border="0" width="100%" height="100%" />
<em><center>Example hierarchy</center></em>

### Submit New Exposure Therapy

Clinicians have the ability to submit new exposure therapies, disorders, and subdisorders directly to Exposurepedia. This is a very important feature, as it allows clinicians to share their exposure therapies with other clinicians. This streamlined process is a major upgrade from the previous workflow on the Wordpress site, where clinicians had to email Rachel their therapies for manual addition.

Again, handling the many cases when submitting a new resource required a bit of creativity.

<br />

<img src="https://images2.imgbox.com/ee/ef/tuXW6FKm_o.png" alt="Submit new resource page" border="0" width="100%" height="100%" />
<em><center>Submit new resource page</center></em>

### Miscellaneous Features

Besides the main features, we also implemented a number of other features, including:

- Authentication (handled by H4I boilerplate)
- Exposure page, which displays the details of a single exposure item, which users could like and admin could edit
- Bulk exposure item uploads
- Manage approved clinicians
- Approve new exposure therapies
- Modifications page, which suggests possible modifications to exposure therapies
- Contact page (SendGrid)

<br />

<img src="https://images2.imgbox.com/78/b5/NHCtyk6T_o.png" alt="Manage clinicians" border="0" width="100%" height="100%" />
<em><center>Add exposure items in bulk from .csv + manage clinicians page</center></em>

## The Result

The application is currently live at [https://www.exposurepedia.com/](https://www.exposurepedia.com/), but only licensed clinicians are able to access the full application. It is currently being adopted by clinicians around the world (as a free resource), and we are so excited to see how it will be used in the future!
