const pinataApiKey = "dda636b8b72c7f1e02d8";
const pinataSecretApiKey = "812000769eda8fe4c98132abea6efb96f2b74cc0541424a28f3859ab52dffb1d";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream("./3.jpg"));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });
  console.log(res.data);
};
pinFileToIPFS();


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMjhmN2Y2Ny01ODk3LTQxMDItOGY5ZC04NTI3NjcwMjZiNDIiLCJlbWFpbCI6ImFkZWJ1bGVhZGVzaGluYTEwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2V9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJkZGE2MzZiOGI3MmM3ZjFlMDJkOCIsInNjb3BlZEtleVNlY3JldCI6IjgxMjAwMDc2OWVkYThmZTRjOTgxMzJhYmVhNmVmYjk2ZjJiNzRjYzA1NDE0MjRhMjhmMzg1OWFiNTJkZmZiMWQiLCJpYXQiOjE2NDc0NjU0Mjh9.zzLIWCjRxR-SjPpqDRWDVSH_MjlbaSY5bCtnh5nag3I