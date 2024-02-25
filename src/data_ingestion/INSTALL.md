# Ingest github data for the chat bot

Install a mongodb shell `mongosh`:
```
brew install mongosh
```

Install the dependencies
```
npm install langchain
npm install ignore
```

Replace your OPENAI_KEY intead `<YOUR_OPENAI_API>`

Connect to your cluster:
```
mongosh $MONGODB_ATLAS_URI
```

Copy paste the script to load the data.

This will create collection `github_repo` inside `netlify_chat_demo`

Create an vector index ontop of this collection:
```
{
  "fields": [
    {
      "numDimensions": 1536,
      "path": "embedding",
      "similarity": "cosine",
      "type": "vector"
    }
  ]
}
```