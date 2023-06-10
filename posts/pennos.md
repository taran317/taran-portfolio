When I finished PennOS, the final project in my graduate Operating Systems class (CIS 5480), I let out a deep breath and felt a level of satisfaction that I hadn't felt in a long time. I knew this experience would be etched in my memory for years to come.

PennOS is a UNIX-like operating system that my team and I built from scratch in C. It includes a priority scheduler, FAT file system, and a shell with job control and input redirection. Due to unforeseen circumstances, our team size unexpectedly reduced from the standard 5 members to just 3. As a result, each of us assumed significant responsibilities for key components of the operating system. I took charge of developing the kernel, which involved creating essential elements such as the priority scheduler, a comprehensive suite of kernel functions, and an API for a user to interact with our OS (e.g., `waitpid()` and `kill()`). I also integrated the kernel with the FAT file system and shell, which involved writing a lot of glue code, as well as debugging and testing. Beyond what was required for the project, we added a few additional fun features and made sure our program had no memory leaks or invalid reads and writes using Valgrind.

<br />
<img src="https://images2.imgbox.com/da/6b/XvJBwRJb_o.png" alt="Possibly the greatest feeling in the world" border="0" width="100%" height="100%" />
<em> <center> <i> Possibly the greatest feeling in the world </i> </center> </em>
<br>

In accordance with UPenn's policies, I can't share any source code or delve into implementation details. But I'll discuss some of important lessons I learned regarding complex projects and teamwork. And if you're interested in hearing more, check out [this paper](https://netdb.cis.upenn.edu/papers/pennos.pdf) written about PennOS or feel free to reach out to me at <tars@seas.upenn.edu>!

### How Much Tod Plan?

Typically, I'm the kind of person who dives right into a project or problem, ready to start coding or prototyping immediately. This approach has served me well, especially for smaller projects where quick solutions are often feasible with some research and tinkering.

So naturally, I dove right in and began working on the kernel. Using the `ucontext` library (similar to a threading API in that it allows one process to split its resources across multiple instances), I tried to implement a SIGALRM-based scheduler for context switching. But as I delved deeper into the project and spent a day or two exploring its complexities, reality started to set in. It became clear that this approach wasn't going to cut it for PennOS.

I realized that I needed a solid understanding of every component and how they interacted with each other. It wasn't enough to just dive in and start coding. I had to take a step back, study the design and architecture of the system, and think about the big picture. Like a chess player carefully planning their next move, every OS design decision had to be carefully considered and weighed against the other options.

So instead of rushing headfirst, I spent quality time digging into the nitty-gritty details, outlining the design of the system, and planning out the implementation. I also spent a lot of time reading up on how Linux was designed and implemented, drawing valuable insights to inform our project. Eventually, as I designed and created the different components of our OS, I ensured that each file had a clear purpose and functionality, establishing a coherent structure and ensuring that the components could seamlessly interact with one another. As I worked on the kernel, I also made sure to document my code thoroughly, so that my teammates (and myself!) could easily understand what I was doing and how the different components fit together.

Looking back, it's evident that without thorough planning and consideration, we would have suffered from a lot of headaches and wasted time in the late stages of the project. By that point, it would've been much more difficult to make significant changes to the design of the system. And ensuring the proper deallocation of memory throughout the entire OS would've been a nightmare.

All this said, it doesn't mean I'm always going to meticulously plan out the details of every future project. But I can confidently say that this method is part of my toolbox for tackling complex projects.

### Navigating the Challenges of Teamwork

As it turns out, well-planned coding was just one piece of the puzzle in a complex, team project. When you're working solo, you have full ownership and responsibility for your work. However, when collaborating with others, you encounter a whole new set of challenges that demand effective communication and collective problem-solving.

As college students with packed schedules, time became a precious commodity. We couldn't afford to remain blocked for long by each other's tasks. I realized that abstracting away my teammates' components would only hinder our progress. To truly support one another and assist with debugging, I needed a comprehensive understanding of their work. This realization pushed me to actively engage with their code and ask lots of questions.

Inevitably, obstacles arose that required us to work together to solve. This especially became apparent when we started integrating the kernel with the FAT file system and building the shell. But before we could even begin, every individual component had to be completed as well as thoroughly tested and debugged. If not, it would be much more difficult to identify the source of the problem from the shell where many components were communicating with each other.

As we approached the critical integration phase, we faced situations where some team members couldn't dedicate enough time to the project due to other commitments. At the time, I didn't realize how much these instances would shape my understanding of effective teamwork. By navigating through these challenges, I discovered firsthand the power of open and honest communication. This required navigating the delicate balance of providing constructive criticism, even when it might have been uncomfortable for my teammates to hear. Equally important was the art of receiving feedback with an open mind without taking it personally.

Working with friends added an additional layer of complexity. It's natural to hesitate when providing criticism, fearing it might strain our relationships. I realized, though, that genuine friendship extends beyond avoiding difficult conversations. By embracing constructive feedback and fostering a culture of open communication, we nurtured an environment where everyone felt comfortable expressing their thoughts. This allowed us to tackle challenges directly and work together to find solutions.

Looking back, this project provided invaluable lessons about the realities of teamwork in complex endeavors. It highlighted the importance of active engagement with teammates' work, the power of giving and receiving feedback, and the courage to address challenges head-on. I am grateful for the opportunity to learn these lessons early on, as I venture into the tech world. I carry these takeaways with me, understanding that collaboration and effective communication are the cornerstones of successful teamwork.
