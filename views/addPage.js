const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="userName" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input
            id="userName"
            name="userName"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="userEmail" class="col-sm-2 control-label"
          >Author Email</label
        >
        <div class="col-sm-10">
          <input
            id="userEmail"
            name="userEmail"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <input id="content" name="content" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="status" class="col-sm-2 control-label">Page Status</label>
        <div class="col-sm-10">
          <input type="radio" name="status" value="closed" /> Closed<br />
          <input type="radio" name="status" value="open" /> Open<br />
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
