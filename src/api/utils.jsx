
const request = function(options){
const headers = new Headers({
    "Content-Type": "application/json"
  });

  headers.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmVjMjYwNDgwMTU3YjQzODViY2I4ZWQiLCJ1c2VybmFtZSI6InRvdWZpcSIsInNjb3BlIjpbImFkbWluIiwic3RhZmYiXSwiaWF0IjoxNTQyODY3NjY2fQ.73BcNIzNEPOSqhvNN6QC1EkR-RAmGyAkMfFijEZ3lvg"
  );
//   let options = {
//     method: "GET"
//   };
  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

 return fetch(options.url, options)
    .then(response => response.json());
}

export const fetchUserList = function(){
    let options = {
        url: "http://localhost:5000/api/users",
        method: "GET"
    }

    return request(options);
}