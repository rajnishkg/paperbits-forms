import { InputModel } from "./inputModel";

export class CheckboxInputModel extends InputModel {
    constructor() {
        super("checkbox");

        this.properties.push({ propertyName: "showLabel", propertyValue: "after" });
        this.properties.push({ propertyName: "labelText", propertyValue: "First option" });
        this.properties.push({ propertyName: "isInline", propertyValue: undefined });
        this.properties.push({ propertyName: "isChecked", propertyValue: undefined });
        this.properties.push({ propertyName: "inputValue", propertyValue: "" });
        this.properties.push({ propertyName: "isRequired", propertyValue: undefined });
    }
}