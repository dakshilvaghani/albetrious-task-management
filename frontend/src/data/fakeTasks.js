const fakeTasks = [
  {
    id: "1",
    title: "Complete Project Report",
    description: "Finalize the report for the upcoming project presentation.",
    dueDate: new Date("2024-10-01").toISOString(),
    status: true, // Completed
  },
  {
    id: "2",
    title: "Prepare for Interview",
    description:
      "Practice coding challenges and review common interview questions.",
    dueDate: new Date("2024-10-05").toISOString(),
    status: false, // Pending
  },
  {
    id: "3",
    title: "Grocery Shopping",
    description:
      "Buy groceries for the week including fruits, vegetables, and dairy.",
    dueDate: new Date("2024-09-30").toISOString(),
    status: false, // Pending
  },
  {
    id: "4",
    title: "Read a Book",
    description:
      'Finish reading "The Pragmatic Programmer" by the end of the week.',
    dueDate: new Date("2024-10-07").toISOString(),
    status: true, // Completed
  },
  {
    id: "5",
    title: "Workout Session",
    description:
      "Attend a yoga class and a strength training session this week.",
    dueDate: new Date("2024-09-28").toISOString(),
    status: false, // Pending
  },
  {
    id: "6",
    title: "Clean the House",
    description: "Deep clean the living room, kitchen, and bedrooms.",
    dueDate: new Date("2024-10-02").toISOString(),
    status: false, // Pending
  },
  {
    id: "7",
    title: "Plan Vacation",
    description:
      "Research destinations, book flights, and find accommodation for the upcoming holiday.",
    dueDate: new Date("2024-11-01").toISOString(),
    status: false, // Pending
  },
  {
    id: "8",
    title: "Team Meeting",
    description: "Attend the weekly team meeting and update the team on progress.",
    dueDate: new Date("2024-09-29").toISOString(),
    status: true, // Completed
  },
  {
    id: "9",
    title: "Client Presentation",
    description:
      "Prepare slides and rehearse for the client presentation on the new software.",
    dueDate: new Date("2024-10-10").toISOString(),
    status: false, // Pending
  },
  {
    id: "10",
    title: "Dentist Appointment",
    description: "Routine dental checkup at the clinic.",
    dueDate: new Date("2024-09-27").toISOString(),
    status: true, // Completed
  },
  {
    id: "11",
    title: "Update Portfolio",
    description:
      "Revise portfolio website and add recent projects to showcase current skills.",
    dueDate: new Date("2024-09-30").toISOString(),
    status: false, // Pending
  },
  {
    id: "12",
    title: "Birthday Gift Shopping",
    description:
      "Buy a gift for a friend's birthday. Consider getting a book or a gadget.",
    dueDate: new Date("2024-10-03").toISOString(),
    status: false, // Pending
  },
  {
    id: "13",
    title: "Volunteer at Local Shelter",
    description: "Help with cleaning and organizing the local animal shelter.",
    dueDate: new Date("2024-10-06").toISOString(),
    status: false, // Pending
  },
  {
    id: "14",
    title: "Renew Car Insurance",
    description: "Renew the car insurance before it expires at the end of the month.",
    dueDate: new Date("2024-09-29").toISOString(),
    status: true, // Completed
  },
  {
    id: "15",
    title: "Organize Desk",
    description: "Declutter and organize the home office desk for better productivity.",
    dueDate: new Date("2024-09-28").toISOString(),
    status: false, // Pending
  },
  {
    id: "16",
    title: "Backup Laptop",
    description: "Backup all important files and documents from the laptop to cloud storage.",
    dueDate: new Date("2024-10-04").toISOString(),
    status: false, // Pending
  },
  {
    id: "17",
    title: "Prepare Budget",
    description: "Create a budget plan for the next three months.",
    dueDate: new Date("2024-09-30").toISOString(),
    status: false, // Pending
  },
  {
    id: "18",
    title: "Family Dinner",
    description: "Organize a dinner with family members this weekend.",
    dueDate: new Date("2024-09-30").toISOString(),
    status: true, // Completed
  },
  {
    id: "19",
    title: "Write Blog Post",
    description: "Write and publish a blog post on the latest web development trends.",
    dueDate: new Date("2024-10-03").toISOString(),
    status: false, // Pending
  },
  {
    id: "20",
    title: "Fix Website Bugs",
    description: "Identify and fix UI bugs reported on the company's website.",
    dueDate: new Date("2024-09-29").toISOString(),
    status: false, // Pending
  },
];

export default fakeTasks;
