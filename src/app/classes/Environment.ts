import { environment } from "../../environments/environment";
import { EnvironmentModel } from "../models/environment.model";

class Environment {
    //#region Constructor
    constructor(public config: EnvironmentModel) { }
    //#endregion
}

export default new Environment(environment);