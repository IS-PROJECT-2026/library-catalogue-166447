const books = [
    {
        id: 1,
        title: "Introduction to Computing",
        author: "John Smith",
        category: "Technology",
        description: "An introductory guide to fundamental computing concepts and principles.",
        available: true,
        cover: "Book Cover"
    },
    {
        id: 2,
        title: "Web Development Basics",
        author: "Jane Doe",
        category: "Programming",
        description: "A beginner-friendly introduction to HTML, CSS, JavaScript, and web development.",
        available: true,
        cover: "Book Cover"
    },
    {
        id: 3,
        title: "Database Systems",
        author: "Michael Brown",
        category: "Computing",
        description: "An overview of database concepts, design, SQL, and database management systems.",
        available: false,
        cover: "Book Cover"
    },
    {
        id: 4,
        title: "Clean Code",
        author: "Robert Martin",
        category: "Programming",
        description: "Practical principles and techniques for writing clean and maintainable software.",
        available: true,
        cover: "Book Cover"
    },
    {
        id: 5,
        title: "Computer Networks",
        author: "Andrew Tanenbaum",
        category: "Networking",
        description: "A comprehensive introduction to computer networking concepts and protocols.",
        available: true,
        cover: "Book Cover"
    },
    {
        id: 6,
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        category: "Technology",
        description: "An introduction to artificial intelligence, intelligent agents, and machine learning.",
        available: false,
        cover: "Book Cover"
    },
    {
        id: 7,
        title: "Operating System Concepts",
        author: "Abraham Silberschatz",
        category: "Computing",
        description: "An introduction to operating system concepts, processes, memory, and file systems.",
        available: true,
        cover: "Book Cover"
    },
    {
        id: 8,
        title: "JavaScript: The Essentials",
        author: "David Miller",
        category: "Programming",
        description: "A practical introduction to JavaScript programming and modern web development.",
        available: true,
        cover: "Book Cover"
    },
    {
        id: 9,
        title: "Software Engineering",
        author: "Ian Sommerville",
        category: "Software Engineering",
        description: "An overview of software engineering processes, development methods, and practices.",
        available: false,
        cover: "Book Cover"
    },
    {
        id: 10,
        title: "Information Security",
        author: "William Stallings",
        category: "Security",
        description: "An introduction to information security, cryptography, threats, and protection techniques.",
        available: true,
        cover: "Book Cover"
    }
];

if (typeof module !== "undefined") {
    module.exports = books;
}