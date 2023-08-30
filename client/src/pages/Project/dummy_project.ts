export const dummy_project={
    // "_id: {
    //   "$oid": "64ef313fb98cb1053c66913e"
    // },
    _id:"cooler123",
    title: "Landing Page",
    description: " need a simple landing page built with React. It should have a hero section with a large image or video, an about section with information about my company, a services section with a list of my products or services, and a contact section with my contact information.",
    skills_required: [],
    category: "Development & IT",
    image: "https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/connect-dev%2Fimage_large.jpg?alt=media&token=b4b2153c-4295-4978-a4e9-7329c94e7658",
    country: "remote",
    urgent: true,
    price: 34,
    difficulty: "low",
    __v: 0,
    views: 12,
    applications:12, 
}
  
export const dummy_project_publisher = {
    image: "https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/connect-dev%2F47e5183c38502bd3bb48d0c551762176.jpg?alt=media&token=79520056-f2e9-4bba-99f6-fddc72b6849f",
    name: "James Babonda",
    description: "Marketing manager for 10 years looking to start my own business very soon!",
    country:"nigeria"
}


export type PublisherType = typeof dummy_project_publisher
export type projectType=typeof dummy_project