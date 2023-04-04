# DocViewer

DocViewer is an application that allows you to view documents in PNG.
The website is made with Angular, Angular Material and Firebase, where I only use 3 services:
Firestore, Storage and Hosting.

# Solution
The way we tried to solve the task was thought in 2 parts:
 - The first part was to create an application that the user could navigate between the documents
and from that list could navigate to a specific document.
 - The second part was to make the user able to save and add new annotations in the document.
 Here, I had an idea more towards mobile development and I based myself on the navigation of Google Maps,
since it uses many FAB buttons to interact with the application, whether in Webapp or Mobile App.
 
# Pros & Cons

## Pros
  - The application being connected to Firestore, we have an continues communication and update of the new annotations.
This is a big advantage, because we only need the document Id to know, where we are adding a new annotations.

  - The annotations can be integrated with images and text, the idea was to be able to do both functionalities in the same annotation.
Since we know the references of the Firebase Storage images, it is easier to obtain the images from there
  - The images / documents can be zoomed in and zoomed out. 
 
## Cons
It was not difficult to implement, but it was a little tedious.
Also, I got sick, so I didn't have enough time to finish the application.

I list below, the things that were missing in the application
 - You can't view the annotations
 - You can't edit the annotations
 - You can't delete the annotations
 - You can't make the offset between documents and also the pagination

## Challenges
  - One of the most complicated things was to implement the annotations with images,
I've never worked with FormData and Angular Material is not very friendly for this type of fields.
I had to use a third-party library, to help me when uploading files.

  - The other challenge was Angular Material and its themes, I didn't remember how difficult it was to implement a color,
or try to get a variable value. I had to move from CSS to SCSS, halfway through the development.
At the end, I decided to use Material 3 Builder, but I couldn't implement the Dark Mode, because I didn't have enough time.
and it gives you each css file as a module, and I had to convert it to SCSS to use the same structure that angular requires/

# Roadmap
  - Show the annotations in the image
  - Get the coordinates, when you click inside the image
  - Scale the coordinates, so that they fit the zoom.
  - Always store the coords based on original image size
  - Implement the edit and delete annotations
  - Implement the pagination
  - Implement the dark mode
