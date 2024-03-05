import React, { useState } from "react";
import ParamEditor from "./ParamEditor";

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

const params: ProductParam[] = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длина",
  },
];

const initialModel: ProductModel = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ],
};

const App: React.FC = () => {
  const [model, setModel] = useState<ProductModel>(initialModel);

  const handleModelChange = (newModel: ProductModel) => {
    setModel(newModel);
  };

  return (
    <div>
      <h1>Product Editor</h1>
      <ParamEditor
        params={params}
        model={model}
        onModelChange={handleModelChange}
      />
    </div>
  );
};

export default App;
