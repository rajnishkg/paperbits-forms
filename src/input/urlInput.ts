import { InputModel } from "./inputModel";

export class UrlInputModel extends InputModel {
    constructor() {
        super("url");

        this.properties.push({ propertyName: "placeholderText", propertyValue: "" });
        this.properties.push({ propertyName: "labelText", propertyValue: "" });
        this.properties.push({ propertyName: "inputValue", propertyValue: "" });
        this.properties.push({ propertyName: "maxLength", propertyValue: undefined });
        this.properties.push({ propertyName: "patternRegexp", propertyValue: "" });
        this.properties.push({ propertyName: "isRequired", propertyValue: undefined });
        this.properties.push({ propertyName: "isReadonly", propertyValue: undefined });
    }
}