When I finished PennOS, the final project in my graduate Operating Systems class (CIS 5480), I let out a deep breath and felt a level of satisfaction that I hadn't felt in a long time. I knew this experience would be etched in my memory for years to come.

PennOS is a UNIX-like operating system that my team and I built from scratch in C. It includes a priority scheduler, FAT file system, and a shell with job control and input redirection. Due to unforeseen circumstances, our team size unexpectedly reduced from the standard 5 members to just 3. As a result, each of us assumed significant responsibilities for key components of the operating system. I took charge of developing the kernel, which involved creating essential elements such as the priority scheduler, a comprehensive suite of kernel functions, and an API for a user to interact with our OS (e.g., `waitpid()` and `kill()`). I also integrated the kernel with the FAT file system and shell, which involved writing a lot of glue code, as well as debugging and testing. Beyond what was required for the project, we added a few additional fun features and made sure our program had no memory leaks or invalid reads and writes using Valgrind.

![Possibly the greatest feeling in the world](https://media.giphy.com/media/3o7TKsQ8U1iZ3Nl7Di/giphy.gif)

<figcaption> <center> <i> Possibly the greatest feeling in the world </i> </center> </figcaption>

In accordance with UPenn's policies, I can't share any source code or delve into implementation details. But I'll discuss some of important lessons I learned regarding complex projects and teamwork. And if you're interested in hearing more, check out [this paper](https://netdb.cis.upenn.edu/papers/pennos.pdf) written about PennOS or feel free to reach out to me at <tars@seas.upenn.edu>!

### Complex Projects

Ordinarily, I'm the type of guy who, when presented with a problem or project will immediately try to get to work.

Typically, I'm the kind of person who dives right into a project or problem, ready to start coding or prototyping immediately. This approach has served me well, especially for smaller projects where quick solutions are often feasible with some research and tinkering.

So naturally, I dove right in and began working on the kernel. Using the `ucontext` library (similar to a threading API in that it allows one process to split its resources across multiple instances), I tried to implement a SIGALRM-based scheduler for context switching. But as I delved deeper into the project and spent a day or two exploring its complexities, reality started to set in. It became clear that this approach wasn't going to cut it for PennOS.

I realized that I needed a solid understanding of every component and how they interacted with each other. It wasn't enough to just dive in and start coding. I had to take a step back, study the design and architecture of the system, and think about the big picture. Like a chess player carefully planning their next move, every OS design decision had to be carefully considered and weighed against the other options.

So instead of rushing headfirst, I spent quality time digging into the nitty-gritty details, outlining the design of the system, and planning out the implementation. I also spent a lot of time reading up on how Linux was designed and implemented, drawing valuable insights to inform our project. Eventually, as I designed and created the different components of our OS, I ensured that each file had a clear purpose and functionality, establishing a coherent structure and ensuring that the components could seamlessly interact with one another. As I worked on the kernel, I also made sure to document my code thoroughly, so that my teammates (and myself!) could easily understand what I was doing and how the different components fit together.

Looking back, it's evident that without thorough planning and consideration, we would have suffered from a lot of headaches and wasted time in the late stages of the project. At that point, we probably would've accepted proper deallocation of memory across the entire OS as an impossibility.

All this said, it doesn't mean I'm always going to meticulously plan out the details of every future project. But I can confidently say that this method is part of my toolbox for tackling complex projects.

### Teamwork

Turns out,
