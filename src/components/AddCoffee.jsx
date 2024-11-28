import React from "react";

const AddCoffee = () => {
    return (
        <div>
            <h2>Add coffee</h2>
            <form>
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Coffee Name"
                                className="input input-bordered"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                className="input input-bordered"
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
