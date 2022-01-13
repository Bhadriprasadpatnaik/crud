import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  let [state, setState] = useState();

  let [getdata, setgetData] = useState();

  let [upDate, setUpdate] = useState("");

  let [id, setId] = useState();

  console.log(id);

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    setUpdate({ ...upDate, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3000/posts", state);
    console.log(state);
  };

  useEffect(() => {
    let a = axios.get("http://localhost:3000/posts");
    a.then(b => {
      setgetData(b.data);
    });
  }, [state]);

  let update = e => {
    let a = axios.get(`http://localhost:3000/posts/${e}`);
    a.then(b => setUpdate(b.data));
    setId(e);
  };

  let handlePatch = e => {
    let a = axios.put(`http://localhost:3000/posts/${e}`, upDate);
    console.log(a);
    window.location.assign("/");
  };

  let dataDelete = e => {
    let a = axios.delete(`http://localhost:3000/posts/${e}`);
    console.log(a);
    window.location.assign("/");
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "1px",
        }}
      >
        <input
          type="text"
          name="name"
          value={upDate.name}
          placeholder="enter a name"
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="phnum"
          value={upDate.phnum}
          placeholder="enter phone number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          value={upDate.company}
          placeholder="enter company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="adress"
          value={upDate.adress}
          placeholder="enter adress"
          onChange={handleChange}
        />
        <input
          type="text"
          name="mail"
          value={upDate.mail}
          placeholder="enter mail"
          onChange={handleChange}
        />
        <button onClick={a => handleSubmit(a)}>Create</button>
        <button onClick={() => handlePatch(id)}>Update</button>
      </form>

      <div>
        <table
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px",
            padding: "30px",
          }}
        >
          <th>
            <h3>Name</h3>
          </th>

          <th>
            <h3>phno</h3>
          </th>
          <th>
            <h3>company</h3>
          </th>
          <th>
            <h3>adress</h3>
          </th>
          <th>
            <h3>Mailid</h3>
          </th>
        </table>

        {getdata
          ? getdata.map((e, i) => (
              <div key={i}>
                <table
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "1px",
                  }}
                >
                  <th>
                    <h3>{e.name}</h3>
                  </th>

                  <th>
                    <h3>{e.phnum}</h3>
                  </th>
                  <br />
                  <br />
                  <br />
                  <th>
                    <h3>{e.company}</h3>
                  </th>
                  <br />
                  <br />

                  <th>
                    <h3>{e.adress}</h3>
                  </th>
                  <br />
                  <br />
                  <th>
                    <h3>{e.mail}</h3>
                  </th>
                  <br />
                  <br />
                  <th>
                    <button onClick={() => update(e.id)}>edit</button>
                  </th>

                  <th>
                    <button onClick={() => dataDelete(e.id)}>Delete</button>
                  </th>
                </table>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
