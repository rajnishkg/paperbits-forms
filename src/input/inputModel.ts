import { InputProperty } from "./inputProperty";
import { WidgetModel } from "@paperbits/common/widgets";

export class InputModel { // implements WidgetModel {
    public properties: InputProperty[];
    public options?: OptionItem[];

    constructor(public inputType: string) {
        this.properties = [];
        this.properties.push({ propertyName: "inputName", propertyValue: "" });
    }

    public getInputProperty = (propertyName: string) => this.properties.find((item) => item.propertyName === propertyName);

    public setProperty(name: string, value: any): void {
        if (!name) {
            return;
        }
        const propertyItem = this.getInputProperty(name);

        if (propertyItem) {
            propertyItem.propertyValue = value;
        }
        else {
            this.properties.push({
                propertyName: name,
                propertyValue: value
            });
        }
    }
}

export class OptionItem {
    public itemName: string;
    public itemValue: any;
}