// const { Client } = require('@notionhq/client');

// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// export default async (req, res) => {
//   const response = await notion.databases.query({ 
//     database_id: process.env.NOTION_DATABASE_ID
//   });

//   res.status(200).json({ response });
// };


// // (async () => {
// //   const blockId = '59833787-2cf9-4fdf-8782-e53db20768a5';
// //   const response = await notion.blocks.children.list({
// //     block_id: blockId,
// //     page_size: 50,
// //   });
// //   console.log(response);
// // })();