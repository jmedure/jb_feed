const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env.NOTION_KEY});

export async function getDatabase(databaseId) {
  const response = await notion.databases.query({ 
    database_id: databaseId,
    filter: {
              property: 'Public',
              checkbox: {
                equals: true,
              },
            },
            sorts: [
              {
              property: 'Entry Stamp',
              direction: 'descending',
              },
            ],
        });
  
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response)
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  console.log(response)
  return response.results;
};