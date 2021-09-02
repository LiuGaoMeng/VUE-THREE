import AgTable from "../components/ag-table"
import AgCalendar from "../components/ag-calendar"

const components = {
    AgTable,
    AgCalendar
};
const install =(Vue) => {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
}
export default install