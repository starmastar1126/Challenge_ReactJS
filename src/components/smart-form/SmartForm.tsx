import React, { Component } from "react";
import "./SmartForm.scss";

interface IState {
  country?: string | undefined;
  commodity?: string | undefined;
}

interface IProps {}

class SmartForm extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      country: undefined,
      commodity: undefined
    };
  }
  private allCountries = [
    { short: "AR", long: "Argentina" },
    { short: "BR", long: "Brazil" },
    { short: "CN", long: "China" }
  ];

  private allCommodities = [
    { short: "CO", long: "CO" },
    { short: "SB", long: "Soybean" },
    { short: "WH", long: "Wheat" }
  ];

  renderCountryInput() {
    return (
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">
          {this.state.country ? "Country" : "Select country"}
        </label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={this.state.country}
          onChange={event => this.setState({ country: event.target.value })}
        >
          <option></option>
          {this.allCountries.map((item, key) => (
            <option key={key} value={item.short}>
              {item.long}
            </option>
          ))}
        </select>
      </div>
    );
  }

  renderCommodityInput() {
    return (
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">
          {this.state.commodity ? "Commodity" : "Select commodity"}
        </label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={this.state.commodity}
          onChange={event => this.setState({ commodity: event.target.value })}
        >
          <option></option>
          {this.allCommodities.map((item, key) => (
            <option key={key} value={item.short}>
              {item.long}
            </option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    return (
      <div className="h-100">
        <div className="row h-100 justify-content-center align-items-center ">
          <form className="col-12 box">
            {this.renderCountryInput()}
            {this.state.country && this.renderCommodityInput()}
            {this.state.commodity && this.renderCommodityInput()}
          </form>
        </div>
      </div>
    );
  }
}

export default SmartForm;
