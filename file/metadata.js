module.exports = {
  parse : (req, res) => {
  let requestData = {
    size: req.file.size + ' bytes',
  }
  
  res.send(requestData);
}
};