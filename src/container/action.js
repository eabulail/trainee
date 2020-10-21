const FetchLogin=async()=>{


    const responce = fetch("https://traineer-064a.restdb.io/rest/accounts", {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5f81fab25799e648a5a8eec6",
          "cache-control": "no-cache",
        }}
      )
      .then(responce=>responce.json())
      console.log(responce);
      return responce;
}
export default  FetchLogin;