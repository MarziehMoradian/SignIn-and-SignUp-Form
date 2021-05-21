import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            Arraystate:[],
			cities : [],
            selectArraystate:'',
			
		};
		this.changeArraystate = this.changeArraystate.bind(this);
		
	}
  
	componentDidMount() {
		this.setState({
			Arraystate : [
				{  name:'اصفهان' , cities: ['نجف آباد', 'کاشان']},
				{  name:'آذربایجان شرقی' , cities: ['اهر', 'تبریز',]},
				{  name:'آذربایجان غربی' , cities: ['  خوی', 'ارومیه']},
				{  name:'تهران' , cities: ['کرج','دماوند']},
				{  name:'اراک' , cities: ['ساوه','خمین']},
				{  name:'شیراز' , cities: ['کازرون','فارس']},
				{  name:'قم' , cities: ['دستجرد','سلفچگان']},
				{  name:'هرمزگان' , cities: ['بندرعباس','قشم']},
				{  name:'بوشهر' , cities: ['برازجان','گناوه']},
				{  name:'خوزستان' , cities: ['دزفول','اهواز']},
			]
		});
	}
  
	changeArraystate(event) {
		this.setState({selectedArraystate: event.target.value});
		this.setState({cities : this.state.Arraystate.find(cntry => cntry.name === event.target.value).cities});
	}


	render() {
		return (
			<div id="container">
	
			

				<div>
					
					<select className="select__degree" placeholder="استان محل تولد" value={this.state.selectedArraystate} onChange={this.changeArraystate}>
						<option>نام استان</option>
						{this.state.Arraystate.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div>
                    {/* <label className="selectTitle">محل تولد</label> */}
					<select className="select__degree" placeholder="شهر">
                        <option>شهر</option>
                        {this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default Dropdown;