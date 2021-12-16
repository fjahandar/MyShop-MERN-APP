import React, {Fragment, useState, useEffect} from "react";
import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";
import MetaData from "../layout/MetaData";
import {register, clearErrors} from "../../actions/userActions";
import {useNavigate} from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const {name, email, password} = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
      "/images/default-user.jpg"
  );
  const {isAuthenticated, error, loading} = useSelector(
      (state) => state.auth
  );
  const alert = useAlert;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/`);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };
  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({...user, [e.target.name]: e.target.value});
    }
  };
  return (
      <Fragment>
        <MetaData title={"Register User"}/>
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
            >
              <h1 className="mb-3">Register</h1>

              <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input
                    type="name"
                    id="name_field"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="avatar_upload">Avatar</label>
                <div className="d-flex align-items-center">
                  <div>
                    <figure className="avatar mr-3 item-rtl">
                      <img
                          src={avatarPreview}
                          className="rounded-circle"
                          alt="avatar preview"
                      />
                    </figure>
                  </div>
                  <div className="custom-file">
                    <input
                        type="file"
                        name="avatar"
                        className="custom-file-input"
                        id="customFile"
                        accept="images/*"
                        onChange={onChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Avatar
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="password_field">Privacy Policy</label>
                <textarea id="privacy-policy" aria-label="Privacy-Policy" rows="4" cols="41" readOnly>
                                Shop App is dedicated to protecting your privacy. This policy discloses the privacy rules for what information we collect from the users, how we use the collected data, establish security measures for user information, and connect with the team regarding your data. Upon using the app, users agree to the terms of this privacy policy.

                                The app may contain links to other websites or embedded content such as YouTube videos. Once you leave the app, the privacy policy does not apply to the information users provide.

                                Information we collect
                                Users can use the app without entering any personally identifiable information. The app automatically collects information regarding the user's internet connection, including IP address, the website’s name, date and time users access the app, and the pages users visit. This information is not personally identifiable.
                                The app will ask users to register or create a guest account and enter personally identifiable information to purchase an item. Personally identifiable information includes users' names, addresses, email addresses, telephone numbers, and credit card information. This information is required to process the orders. Credit card information is temporarily stored on secured servers and will not be retained. The personally identifiable information will be kept to provide a service to the users. This app is only for adults, and it will not collect personal information from minors.

                                Use of the information we collect
                                Shop app is the owner of collected information. The app has access only to the voluntarily submitted personal information through the app. Collected data will not be delivered/sold to anyone. The app may share address information to third-party nonprofit organizations for promotional usage. The email or telephone numbers will not be shared. The users have the ability to opt-out regarding address sharing.

                                Contact us regarding your information:
                                The users may opt-out of any future communications from the app at any time. If the users have any questions or concerns regarding the privacy policy, they can contact me at: myshop@shopapp.com.

                                Changes to this privacy policy
                                Shop app can update this privacy policy at any time. Film Forum may update this privacy policy at any time. The date of the most recent update is at the bottom of this statement.

                                Last updated: 12/12/2021

                            </textarea>
              </div>


              <button
                  id="register_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </Fragment>
  );
};

export default Register;
