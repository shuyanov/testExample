import React, { useState } from "react";

interface ProductParam {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface ProductModel {
  paramValues: ParamValue[];
}

interface Props {
  params: ProductParam[];
  model: ProductModel;
  onModelChange: (model: ProductModel) => void;
}

const ParamEditor: React.FC<Props> = ({ params, model, onModelChange }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  );

  const handleParamChange = (paramId: number, value: string) => {
    const newParamValues = paramValues.map((param) => {
      if (param.paramId === paramId) {
        return { ...param, value };
      }
      return param;
    });
    setParamValues(newParamValues);
  };

  const handleSave = () => {
    const updatedModel: ProductModel = {
      paramValues: paramValues,
    };
    onModelChange(updatedModel);
  };

  const handleGetModel = () => {
    console.log(model);
  };

  return (
    <div>
      {params.map((param) => (
        <div key={param.id}>
          <label htmlFor={`param-${param.id}`}>{param.name}</label>
          <input
            type="text"
            id={`param-${param.id}`}
            value={
              paramValues.find((pv) => pv.paramId === param.id)?.value || ""
            }
            onChange={(e) => handleParamChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
      <button onClick={handleGetModel}>Get Model</button>
    </div>
  );
};

export default ParamEditor;
