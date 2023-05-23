import InfoComponent from '../../components/infoComponent';
import TableFooter from '../../components/tableFooter';
import LogoContainer from '../../components/logoContainer';
import OptionComponent from '../../components/optionComponent';

	const dataList = Array(5).fill(
	{
		logo: 'JG',
		name: 'Nombre del producto',
		description: 'Descripcion',
		initialDate: '01/01/2000',
		endDate: '01/01/2000'
	}
);


const Home = () => {
	return (

    <main className="home">
			<div>
				<div className="home_header_section">

					<div><input type="text" placeholder="Search" className="search_input" /></div>
					<button className="home_header_section__button">Agregar</button>

				</div>

				<div>
					<table className="home_table">
						<thead> 
							<tr>
								<th>Logo</th>
								<th>Nombre del producto</th>
								<th>Descripcion <InfoComponent/></th>
								<th>Fecha de liberacion <InfoComponent/></th>
								<th>Fecha de reestructuracion <InfoComponent/></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{
								dataList.map((item, idx) => (
								<tr key={idx}>
									<td><LogoContainer>{item.logo}</LogoContainer></td>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.initialDate}</td>
									<td>{item.endDate}</td>
									<td>
										<OptionComponent/>
									</td>
								</tr>
								))
							}
						</tbody>
					</table>
					<TableFooter />
				</div>
			</div>
    </main>
	)
}

export default Home;
