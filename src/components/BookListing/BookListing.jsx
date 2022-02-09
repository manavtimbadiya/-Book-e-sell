import React from "react";
import "./BookListing.css";

const BookListing = () => {
    return (
        <main>
        <section class="product-page-wrapper">
          <div class="container">
            <h1>Book</h1>
            <div class="btn-wrapper">
              <div class="form-group">
                <label for="search" id="search-label">First Name *</label>
                <input type="text" class="form-control" id="search" placeholder="Search..."/>
              </div>
              <button class="btn blue-btn">Add product</button>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title	</th>
                            <th>Data source</th>
                            <th>Query</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><a href="#" class="btn green-border-btn" title="Edit">Edit</a></li>
                                    <li><a href="#" class="btn blue-border-btn" title="Delete">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><a href="#" class="btn green-border-btn" title="Edit">Edit</a></li>
                                    <li><a href="#" class="btn blue-border-btn" title="Delete">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><a href="#" class="btn green-border-btn" title="Edit">Edit</a></li>
                                    <li><a href="#" class="btn blue-border-btn" title="Delete">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><a href="#" class="btn green-border-btn" title="Edit">Edit</a></li>
                                    <li><a href="#" class="btn blue-border-btn" title="Delete">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><a href="#" class="btn green-border-btn" title="Edit">Edit</a></li>
                                    <li><a href="#" class="btn blue-border-btn" title="Delete">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul class="btn-list">
                                    <li><a href="#" class="btn green-border-btn" title="Edit">Edit</a></li>
                                    <li><a href="#" class="btn blue-border-btn" title="Delete">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-pagination">
                <p>Rows per page:</p>
                <label  for="selection">Selection</label>
                <select id="selection">
                    <option value="5">5</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <p class="pagination-wcaption"><span>1</span>-<span>6</span> of <span>6</span></p>
                <ul class="next-prev-list">
                    <li class="disable"><a href="#">Previous<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg></a></li>
                    <li><a href="#">Next<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg></a></li>
                </ul>
            </div>
            </div>
        </section>
      </main>
    )
}

export default BookListing;