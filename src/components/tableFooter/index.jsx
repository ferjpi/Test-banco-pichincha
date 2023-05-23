import './index.css';

const TableFooter = () => {
	return (

					<div className="table_footer">
						<span className="table_footer__results">Resultados</span>
						<select id="pagination" name="pagination" className="table_footer__pagination">
							<option value="1">1</option>
						</select>
					</div>
	)
}

export default TableFooter;
