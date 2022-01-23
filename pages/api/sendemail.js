export default function handler(req, res){
    console.log(req.body);
    if(req.method === 'POST'){
        res.status(200).json({msg : req.body });
    } else {
        res.status(401).json({err: 'not a post request'})
    }
}