import React from "react";
import Nav from "./Nav";

export default function Forms() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>

                <label>Comments:</label>
                <textarea className="form-control" rows="5" id="comment" name="text"></textarea><br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}