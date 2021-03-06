import { useSelector, useDispatch } from "react-redux";
import { selecteFilter } from "../../actions";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
	const { filters, filtersLoadingStatus, selectedFilter } = useSelector((state) => state.filters);
	const dispatch = useDispatch();

	const selectFilter = (name) => dispatch(selecteFilter(name));

	const buttons = (filterItems, filterStatus) => {
		if (filterStatus === "loading") {
			return <h5 style={{ color: "blue" }}>Загрузка элементов...</h5>;
		} else if (filterStatus === "error") {
			return <h5 style={{ color: "red" }}>Ошибка загрузки</h5>;
		}

		if (filterItems.length > 0) {
			return filterItems.map(({ name, label, className }) => {
				return (
					<button
						key={name}
						className={`btn ${className} ${selectedFilter === name && "active"}`}
						onClick={() => selectFilter(name)}
					>
						{label}
					</button>
				);
			});
		}
	};

	return (
		<div className="card shadow-lg mt-4">
			<div className="card-body">
				<p className="card-text">Отфильтруйте героев по элементам</p>
				<div className="btn-group">{buttons(filters, filtersLoadingStatus)}</div>
			</div>
		</div>
	);
};

export default HeroesFilters;
