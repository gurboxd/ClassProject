import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
 });
 const navigate = useNavigate();
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
 
   const newPost = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPost),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/");
 }
 
 return (
   <div>
     <h3>Create New Post</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name:</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Message Body:</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="songIdea"
             value="Song Idea"
             checked={form.level === "Song Idea"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="songIdea" className="form-check-label">Song Idea</label>
         </div>
         
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="liveConcertRequests"
             value="Live Concert Requests"
             checked={form.level === "Live Concert Requests"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="liveConcertRequests" className="form-check-label">Live Concert Requests</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="criticisms"
             value="Criticisms"
             checked={form.level === "Criticisms"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="criticisms" className="form-check-label">Criticisms</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Post"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}