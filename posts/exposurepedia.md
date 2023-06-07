Exposurepedia is the first-ever encyclopedia for exposure therapies, and it is currently being adopted as a valuable tool by clinicians across the world. It is a project I've spent a year working on as Technical Lead @ [Hack4Impact](https://hack4impact.org/) at the University of Pennsylvania. In short, Hack4Impact is a student organization that builds software for non-profits.

[Rachel Schwartz, Ph.D.](https://www.med.upenn.edu/ctsa/Rachel_Schwartz.html), a postdoctoral fellow at the Center for the Treatment and Study of Anxiety (CTSA) at the University of Pennsylvania, reached out to us and shared her experience as a clinical psychologist and research fellow. She explained the pain points she and other clinicians face when trying to find and share exposure therapies.

Exposure therapies are a type of cognitive behavioral therapy that help people overcome their fears. For example, if someone is afraid of dogs, they might be asked to pet a dog. At a high level, the idea is that the more you are exposed to your fear, the less afraid you will be (there is a rich body of research focused on understanding the [mechanisms for why exposure therapy works](https://www.sciencedirect.com/science/article/pii/S0272735804001187?casa_token=-DEh9tyl8eYAAAAA:qbuCJSOhPh1atTl831SrhJdf2kZs64_32u_T5NyRcJRSmv1ysItdtBqwnCd7uMy1bcvd0B9vclNX)).

Exposure therapy is a very effective treatment for anxiety disorders with years of robust research supporting its efficacy. However, exposure therapies are extremely underutilized in clinical practice. One reason for this is that clinicians often have to spend hours searching for exposure therapies, and that they often have to create their own exposure therapies from scratch. They also often have to share their exposure therapies with other clinicians, but this process is very time-consuming and inefficient.

Rachel tried to address this problem by creating a spreadsheet of exposure therapies along with a Wordpress website which displayed exposure therapies.

![Wordpress Site](/images/exposurepedia.png)

However, this solution was not ideal:

- The Wordpress site was not at all user-friendly
- Searching for disorders did not return relevant exposure therapies
- Adding new exposure therapies required a lot of manual work and technical knowledge
- nested disorders categories were not supported (i.e. OCD -> Existential -> Fear of Wasting Time)

## The Solution

Along with my friends Ziya Xu and Katherine Wang in Hack4Impact, we decided to build a web application that would address these pain points.

Before we started building, we spent countless hours designing the application on Figma—it was imperative that we got the user experience right. We iterated on the design many times, reaching out to Rachel for feedback, who in turn reached out to clinicians to get their feedback. We ended up with a design that was both intuitive and functional.

![Figma Design](/images/figma.png)

I managed 8 talented Hack4Impact developers to build the application. We used the MERN stack (MongoDB, Express, React, Node) and [Material-UI](https://material-ui.com/) for the frontend design, building on top of the Hack4Impact [boilerplate](https://github.com/hack4impact-upenn/boilerplate-s2022). The boilerplate, which I helped develop in Spring 2022, handles authentication, database connections, and other boilerplate code that is common to most web applications.

### Filter & Search

![Filter & Search](/images/filter.png)

The most

### Submit New Exposure Therapy

### Hierarchies

### Miscellaneous

- Bulk uploads
- Manage approved clinicians
- Approve new exposure therapies
- Modifications page
- Contact page (Sendgrid)

![Bulk Upload](/images/bulk.png)

### Deployment

## Challenges

## The Result

The application is currently live at [exposurepedia.org](https://exposurepedia.org/). It is currently being adopted by clinicians across the world, and we are so excited to see how it will be used in the future!
