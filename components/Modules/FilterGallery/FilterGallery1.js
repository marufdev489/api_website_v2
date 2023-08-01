import React from "react";

const imgs = [
  {
    author: "ifad ecommerce",
    tag: "People",
    src: "/Eshop-Logo.png",
  },
  {
    author: "haefa",
    tag: "Food",
    src: "/haefa.png",
  },
  {
    author: "ifad ecommerce",
    tag: "Animals",    
    src: "/Eshop-Logo.png",

  },
  {
    author: "haefa",
    tag: "Plants",
    src: "/haefa.png",
  },
  {
    author: "ifad ecommerce",
    tag: "Plants",
    src: "/Eshop-Logo.png",
  },
  {
    author: "haefa",
    tag: "People",
    src: "/haefa.png",
  },
  {
    author: "ifad ecommerce",
    tag: "Food",
    src: "/Eshop-Logo.png",
  },
  {
    author: "haefa",
    tag: "Animals",
    src: "/haefa.png",
  },
];

const filters = [
  { name: "People", status: false },
  { name: "Animals", status: false },
  { name: "Plants", status: false },
  { name: "Food", status: false },
];

const Filters = ({ onClickAll, all, onClick, filters }) => (
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input type="checkbox" checked={all} />
        <label htmlFor="all" className="rounded-1 px-3">All</label>
      </li>
      {filters.map((filter, i) => (
        <li key={i} data-index={i} onClick={onClick}>
          <input id={filter.name} type="checkbox" checked={filter.status} />
          <label htmlFor={filter.name} className="rounded-1 px-3">{filter.name}</label>
        </li>
      ))}
    </ul>
  </form>
);

const Cards = ({ imgs }) => (
  <ul>
    {imgs.map((img, i) => (
      <li key={i}>
        <figure>
          <img src={img.src} alt={img.author} />
          <figcaption>
            <div className="text-center fw-bold text-light figure_title text-capitalize">{img.author} </div>
            <span></span>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

class FilterGallery extends React.Component {
  state = {
    imgs,
    filters,
    all: true,
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters,
    });

    this.updateFilters();
    this.updateImgs();
  };

  setAll = () => {
    const { filters } = this.state;

    filters.forEach((filter) => {
      filter.status = false;
    });

    this.setState({
      all: true,
      filters,
    });
  };

  updateFilters() {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false,
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if (img.tag == filter.name && filter.status == true) {
          newImgs[a] = img;
          a++;
        }
      });
    });

    this.setState({
      imgs: newImgs,
    });
  }

  render() {
    const { filters, all } = this.state;
    return (
      <div>
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}
        />
        {all ? <Cards imgs={imgs} /> : <Cards imgs={this.state.imgs} />}
      </div>
    );
  }
}
export default FilterGallery;
