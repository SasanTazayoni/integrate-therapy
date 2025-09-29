# Integrate Therapy

![HTML](./tech/html.png) ![CSS](./tech/css.png) ![Typescript](./tech/typescript.png) ![Vite](./tech/vite.png) ![React](./tech/react.png) ![Jest](./tech/jest.png) ![ChatGPT](./tech/chatgpt.png) ![VSCode](./tech/vscode.png)

## Introduction

Integrate Therapy is a professional psychotherapy website created to provide an accessible and trustworthy online presence for a private practice. The aim was to give prospective clients a clear understanding of the services offered, provide answers to common questions, and make it simple to get in touch. By building a dedicated space online, the project ensures that people looking for therapy can find reliable information quickly and feel confident in reaching out.

The site achieves this by presenting clear, structured content tailored to adults who may be considering therapy for the first time or looking to continue their therapeutic journey. Visitors can learn about the therapist, understand fees and cancellation policies, explore answers to FAQs, and submit enquiries directly through a built-in form. The website is designed to reassure and inform, offering an approachable entry point to therapy both online and in person.

This project represents the first web application I ever developed. It began as a simple static site built with just HTML and CSS, later incorporating small amounts of JavaScript for interactivity. Over time, the interface and structure were improved, and the project was rebuilt using React and TypeScript. With each stage, I refined the UI, improved performance, and introduced reusable components, transforming the site into a more modern, scalable application.

The result is more than just an informational site — it’s a resource designed with care for accessibility, clarity, and professionalism. It reflects both the values of Integrate Therapy and my own growth as a developer, combining a meaningful real-world application with the opportunity to continually expand and improve my technical skills.

You can view the website [here](https://sasantazayoni.github.io/integrate-therapy/).

![Integrate Therapy website on various devices](documentation/amiresponsive.png)

## User Experience

### User stories

- **As a user, I want to easily see what services are offered (online therapy, face-to-face sessions, specialisms) so I can decide if they fit my needs.**  
  → The site has a dedicated services section that clearly lists what’s available on the Services page.

- **As a user, I want to find pricing information so I know how much sessions will cost before reaching out.**  
  → Pricing is displayed transparently on the website so users don not need to guess on the Contact page.

- **As a user, I want a clear call-to-action (e.g. “Book a session”, “Contact me”) so I know what to do next.**  
  → Prominent buttons and links guide users to take the next step on all pages.

- **As a user, I want to read about the therapy approach and methods so I can feel reassured it aligns with my expectations.**  
  → The site provides an explanation of the therapeutic style and philosophy in simple language on the About page.

- **As a user, I want to see the location and directions for in-person sessions so I can easily find the office.**  
  → The contact section includes the clinic address and map integration on the Contact page.

- **As a user, I want a contact form or email link so I can quickly get in touch to ask questions or book.**  
  → A simple contact form and email links allow direct communication on the Contact page.

- **As a user, I want a phone number so I can call or message directly.**  
  → The phone number contact are clearly visible on the Contact page.

- **As a user, I want to know if online sessions are available so I can consider remote therapy.**  
  → The FAQ page highlights that online sessions are offered.

- **As a user, I want the website to be mobile-friendly so I can browse easily on my phone.**  
  → The site uses responsive design so it works well on all screen sizes.

- **As a user, I want accessible text and navigation (contrast, font sizes, ARIA labels) so the site is usable for everyone.**  
  → Accessibility best practices (readable fonts, good contrast, semantic HTML) are applied to support all users.

- **As a user, I want to view testimonials so I can build confidence in the practice.**  
  → A testimonials section shares positive experiences to increase trust on the Home page.

- **As a user, I want an FAQ section so I can quickly find answers to common questions.**  
  → A dedicated FAQ page addresses common concerns like process, confidentiality, and payment.

- **As a user, I want the site to load quickly.**  
  → Optimised images and a lightweight static build keep the site fast built with React.

### Design

#### Overall feel

The Integrate Therapy website embraces a calm, modern, and inviting aesthetic designed to foster trust and clarity. Its clean layouts, soothing palette, and approachable typography create a sense of warmth without sacrificing professionalism, while clear navigation and visual hierarchy gently guide users through the information. The design prioritises responsiveness and accessibility, ensuring the experience feels consistent and inclusive across all devices. More than just an informational site, it serves as a supportive bridge -encouraging visitors to feel safe, understood, and confident in taking the next step toward therapy.

#### Colour palette

![Integrate Therapy colour palette](documentation/colourpalette.png)

This colour palette works well for the website because the combination of bright and deep blues conveys trust, calmness, and professionalism, while the light grey and white backgrounds keep the design clean and approachable, and the subtle accent shades provide clarity and visual hierarchy without overwhelming the user.

#### Typography

Open Sans is used for body text, while Lora is used for headings. This combination was a deliberate choice to create a calm, professional, and approachable aesthetic. Open Sans provides clean, highly readable text for comfortable reading, and Lora adds elegance and visual distinction to headings, helping guide the user’s attention while reinforcing a sense of trust and credibility throughout the site.

#### Wireframes

All Wireframes were designed for larger screens such as laptops or computers; for medium sized screens such as tablets or large phones; and for small screens down to the smallest phone display. The wireframes were made with desktop and mobile views and can be viewed here:

* Home page desktop:

![Home page desktop wireframe](documentation/homedesktop.jpg) <br>

* Home page mobile:

![Home page mobile wireframe](documentation/homemobile.jpg) <br>

* About page desktop:

![About page desktop wireframe](documentation/aboutdesktop.jpg) <br>

* About page mobile:

![About page mobile wireframe](documentation/aboutmobile.jpg) <br>

* Training page desktop:
 
![Training page desktop wireframe](documentation/trainingdesktop.jpg) <br>

* Training page mobile:

![Training page mobile wireframe](documentation/trainingmobile.jpg) <br>

* Services page desktop:

![Services page desktop wireframe](documentation/servicesdesktop.jpg) <br>

* Services page mobile:

![Services page mobile wireframe](documentation/servicesmobile.jpg) <br>

* FAQ page desktop:

![FAQ page desktop wireframe](documentation/faqdesktop.jpg) <br>

* FAQ page mobile:

![FAQ page mobile wireframe](documentation/faqmobile.jpg) <br>

* Contact page desktop:

![Contact page desktop wireframe](documentation/contactdesktop.jpg) <br>

* Contact page mobile:

![Contact page mobile wireframe](documentation/contactmobile.jpg) <br>

The wireframes do not fully correspond with the end product due to multiple changes made throughout the production phase.

### Features

#### Current features

* The application is designed using Responsive Design and is fully responsive on all devices.

* The company logo exists on the navbar of every page:

![Company logo](documentation/logo.png)

* All buttons have a hover effect that produces a ripple-like animation to recolour the button:

![Hover effect](documentation/buttonhovereffect.png) <br>

* The navbar exists on every page. There are menu links on a large screen and a hamburger with a dropdown menu on smaller screens:

![Desktop navbar](documentation/navbardesktop.png) <br>
![Mobile navbar](documentation/navbarmobile.png) <br>
![Dropdown menu for mobile view](documentation/dropdownmenu.png) <br>

* The footer exists on every page. The footer menu is aligned horizontally on desktops and vertically on mobiles:

![Desktop footer](documentation/footerdesktop.png) <br>
![Mobile footer](documentation/footermobile.png) <br>

* The homepage is thoughtfully structured to guide visitors through a calm and welcoming experience. It begins with a Hero Section that introduces the practice, followed by a Welcome Block that offers a brief overview of services. Next, an Empty Section serves as a subtle background element, enhancing the site's aesthetic without overwhelming the content. The page concludes with a Testimonials Section, featuring client feedback to build trust and credibility. Throughout, the design emphasises tranquility and professionalism, with images and layout choices that evoke a sense of peace and approachability:

![Hero](documentation/hero.png) <br>
![Welcome block](documentation/welcomeblock.png) <br>
![Child bursting a bubble](documentation/childbackground.png) <br>
![Testimonials](documentation/testimonials.png) <br>

* The About page is designed to provide visitors with a comprehensive understanding of the therapist's qualifications and personal approach. It begins with an About Me section, offering insights into the therapist's background and therapeutic philosophy. Following this, a Training and Qualifications section details the therapist's professional training, including Schema Therapy, Psychodynamic Therapy, and membership with the British Association for Counselling and Psychotherapy (MBACP). An Empty Section serves as a subtle background element, enhancing the site's aesthetic without overwhelming the content. The page concludes with a Personal Interests section, providing a glimpse into the therapist's personal life and interests, fostering a sense of connection with potential clients:

![About me section](documentation/aboutme.png) <br>
![Training section](documentation/trainingsection.png) <br>
![Child reading a book laughing](documentation/childtrainingbackground.png) <br>
![Personal interests section](documentation/interests.png) <br>

* The Services page provides a clear and concise overview of the therapeutic services offered. It begins with an introductory section that outlines the available services and concludes with a welcoming image:

![Services offered](documentation/services.png) <br>
![Services background image](documentation/servicesbackground.png) <br>

* The FAQ page provides a structured list of frequently asked questions to help visitors quickly find answers about therapy services, booking, and practical details:

![FAQ sample](documentation/faq.png) <br>
![FAQ buttons](documentation/faqbuttons.png) <br>

* The Contact page provides all essential information for prospective clients. It begins with the therapist’s contact details, followed by important practical information including fees and the cancellation policy. Next, an enquiries section allows users to submit messages directly through a contact form. The page concludes with an embedded Google Map, displaying the exact location of the therapist’s office for easy navigation. The layout is clean and user-friendly, emphasizing clarity and accessibility while maintaining the website’s calm and professional aesthetic:

![Contact details](documentation/contactdetails.png) <br>
![Fees & cancellation policy cards](documentation/fees.png) <br>
![Enquiries form](documentation/enquiries.png) <br>
![Google maps embed](documentation/googlemaps.png) <br>

### Future features

* Blog Section – A dedicated blog where the admin can create and publish posts, providing valuable mental health insights, therapy tips, and updates for visitors. This feature will allow the practice to engage with clients more dynamically and share expertise beyond static pages.
