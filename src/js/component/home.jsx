import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const click = () => {
    alert("A simple primary alert—check it out!");
  };
  return (
    <>
      <nav class="navbar navbar-light bg-light mb-3">
        <form class="container-fluid mx-5">
          <a class="navbar-brand fw-normal" href="#">
            <i class="d-inline-block fa-brands fa-instagram" />
            {"\u00a0"} Instagram
          </a>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-primary mx-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create a new post
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Create new post
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body d-flex flex-column pb-0">
                    <h6>Caption:</h6>
                    <div class="input-group">
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Add the caption of your post here"
                      />
                    </div>
                    <div class="d-flex justify-content-start my-2">
                      <button type="button" class="btn btn-secondary mx-1">
                        <i class="fa-solid fa-camera"></i>
                      </button>
                      <button type="button" class="btn btn-secondary mx-1">
                        <i class="fa-solid fa-location-dot"></i>
                      </button>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-success">
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-gear"></i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Accesibility
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Privacy and Data
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item text-danger" href="#">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </nav>

      <div class="container-fluid">
        <ul class="nav nav-tabs d-flex justify-content-center" id="myTab">
          <li class="nav-item">
            <a href="#grid" class="nav-link active" data-bs-toggle="tab">
              <i class="fa-solid fa-grip" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#byOne" class="nav-link" data-bs-toggle="tab">
              <i class="fa-solid fa-bars" />
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="grid">
            <div class="container-fluid">
              <div class="row my-3 mx-0">
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/10/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1000/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1002/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
              </div>
              <div class="row my-3 mx-0">
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1015/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1025/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1039/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
              </div>
              <div class="row my-3 mx-0">
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1040/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1050/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
                <div class="col text-center">
                  <img
                    src="https://picsum.photos/id/1054/520"
                    style={{ maxHeight: "29vw" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="byOne">
            <div class="container my-5">
              <div class="card mx-auto" style={{ width: "40vw" }}>
                <div class="d-flex flex-column" width="40vw">
                  <div class="titulo-foto">
                    <div class="Ico">
                      <i class="fa-brands fa-html5 fa-2xl"></i>
                    </div>
                    <div class="InstaText">
                      <h3>A great forest</h3>
                    </div>
                    <div class="textDate">
                      <h6 class="m-0">10/22</h6>
                    </div>
                  </div>
                  <div class="div-image">
                    <img
                      src="https://picsum.photos/id/10/700"
                      style={{ maxWidth: "95%" }}
                    />
                  </div>
                  <div class="downpost">
                    <div class="socials">
                      <a href="#">
                        <i class="fa-solid fa-heart fa-xl"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-comment fa-xl"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-paper-plane fa-xl"></i>
                      </a>
                      <a href="#" id="right">
                        <i class="fa-solid fa-bookmark fa-xl"></i>
                      </a>
                    </div>
                    <div class="footer">
                      <footer>
                        Liked by <b>4Geeks Academy</b>, <b>html5</b>, <b>Web</b>
                        , and <b>100.000 others</b>
                      </footer>
                    </div>
                    <div class="description">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mx-auto my-4" style={{ width: "40vw" }}>
                <div class="d-flex flex-column" width="40vw">
                  <div class="titulo-foto">
                    <div class="Ico">
                      <i class="fa-brands fa-html5 fa-2xl"></i>
                    </div>
                    <div class="InstaText">
                      <h3>Salvation</h3>
                    </div>
                    <div class="textDate">
                      <h6 class="m-0">07/19</h6>
                    </div>
                  </div>
                  <div class="div-image">
                  <img
                      src="https://picsum.photos/id/1000/700"
                      style={{ maxWidth: "95%" }}
                    />
                  </div>
                  <div class="downpost">
                    <div class="socials">
                      <a href="#">
                        <i class="fa-solid fa-heart fa-xl"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-comment fa-xl"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-paper-plane fa-xl"></i>
                      </a>
                      <a href="#" id="right">
                        <i class="fa-solid fa-bookmark fa-xl"></i>
                      </a>
                    </div>
                    <div class="footer">
                      <footer>
                        Liked by <b>4Geeks Academy</b>, <b>html5</b>, <b>Web</b>
                        , and <b>60.000 others</b>
                      </footer>
                    </div>
                    <div class="description">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mx-auto my-4" style={{ width: "40vw" }}>
                <div class="d-flex flex-column" width="40vw">
                  <div class="titulo-foto">
                    <div class="Ico">
                      <i class="fa-brands fa-html5 fa-2xl"></i>
                    </div>
                    <div class="InstaText">
                      <h3>On the sea</h3>
                    </div>
                    <div class="textDate">
                      <h6 class="m-0">05/18</h6>
                    </div>
                  </div>
                  <div class="div-image">
                  <img
                      src="https://picsum.photos/id/1002/700"
                      style={{ maxWidth: "95%" }}
                    />
                  </div>
                  <div class="downpost">
                    <div class="socials">
                      <a href="#">
                        <i class="fa-solid fa-heart fa-xl"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-comment fa-xl"></i>
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-paper-plane fa-xl"></i>
                      </a>
                      <a href="#" id="right">
                        <i class="fa-solid fa-bookmark fa-xl"></i>
                      </a>
                    </div>
                    <div class="footer">
                      <footer>
                        Liked by <b>4Geeks Academy</b>, <b>html5</b>, <b>Web</b>
                        , and <b>30.000 others</b>
                      </footer>
                    </div>
                    <div class="description">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
