const { GithubRepoLoader } = require("langchain/document_loaders/web/github");
const { compile } = require("html-to-text");
//const { RecursiveUrlLoader} = require("langchain/document_loaders/web/recursive_url");

const { OpenAIEmbeddings } = require('@langchain/openai'); // Import OpenAI embeddings

 const run = async () => {
  // Set up GitHub Repo Loader
  const loader = new GithubRepoLoader(
    "https://github.com/mongodb-developer/nodejs-quickstart",

    {
      branch: "master",
      recursive: true,
      unknown: "warn",
      maxConcurrency: 5,
    }
  );

  // Load documents from GitHub
  const docs = await loader.load();

// const url = "https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/"
// // const compiledConvert = compile({ wordwrap: 130 }); // returns (text: string) => string;

// // const loader = new RecursiveUrlLoader(url, {
// //   compiledConvert,
// //   maxDepth: 1,
// // });

// const docs = await loader.load();


  // Set up OpenAI embeddings
  const embeddings = new OpenAIEmbeddings({

    openAIApiKey: "<YOUR_OPENAI_API>", // Your OpenAI API key
    modelName: "text-embedding-3-large",
    dimensions: 1536
  });

  // Compute embeddings for each document
  for (const doc of docs) {
    const text = doc.pageContent; // Assuming 'content' contains the text of the document
    const respEmbed = await embeddings.embedDocuments([text]);
 

    use('netlify_chat_demo');
    console.log(`processing file ${doc.metadata.source} with embedding of ${respEmbed[0].length}`)
    db.github_repo.insertOne({
      metadata: doc.metadata,
      pageContent: doc.pageContent,
      embedding: respEmbed[0]
    });

   // db.github_repo.insertOne({
      

    // Process or store the embedding as needed
    // e.g., store in MongoDB or perform further operations
  }

  // Additional processing or cleanup if necessary
};

run().then(() => {
  console.log('Completed processing');
}).catch((err) => {
  console.error(err);
});
