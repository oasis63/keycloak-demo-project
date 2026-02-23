// create an endpoint for getting an array of documents containing user

// Simulated documents data (in a real app, this would come from a database)
const documents = [
    { id: 1, title: "Document 1", content: "Content of document 1", user: "user1@example.com" },
    { id: 2, title: "Document 2", content: "Content of document 2", user: "user2@example.com" },
    { id: 3, title: "Document 3", content: "Content of document 3", user: "user1@example.com" },
    { id: 4, title: "Document 4", content: "Content of document 4", user: "user2@example.com" },
    { id: 5, title: "Document 5", content: "Content of document 5", user: "rajesh@email.com" },
    { id: 6, title: "Document 6", content: "Content of document 6", user: "rajesh@yopmail.com" },
];

const getDocuments = (req, res) => {
    // Get documents for the authenticated user
    const userDocuments = documents.filter(doc => doc.user === req.user);

    console.log(`Documents for user ${req.user}:`, userDocuments);

    res.json({
        documents: userDocuments,
    });
};

module.exports = getDocuments;
