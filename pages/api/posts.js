import posts from '../../cms.json'


export default function handler(req, res) {

  // return the a lists of posts
  res.status(200).json(posts)

}
