/* eslint-disable @next/next/no-img-element */

import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Menu } from "primereact/menu";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductService } from "../demo/service/ProductService";
import { LayoutContext } from "../layout/context/layoutcontext";
import SeverityBar from "./SeverityBar";
import Link from "next/link";
import { Demo } from "../types/types";
import { ChartData, ChartOptions } from "chart.js";
import { FileUpload } from "primereact/fileupload";

const lineData: ChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "#2f4860",
      borderColor: "#2f4860",
      tension: 0.4,
    },
    {
      label: "Second Dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: "#00bb7e",
      borderColor: "#00bb7e",
      tension: 0.4,
    },
  ],
};
const buttonStyle = {
  borderColor: "#FF0000",
  color: "#FF0000",
  cursor: "not-allowed",
};
const Dashboard = () => {
  const [products, setProducts] = useState<Demo.Product[]>([]);
  const menu1 = useRef<Menu>(null);
  const menu2 = useRef<Menu>(null);
  const [lineOptions, setLineOptions] = useState<ChartOptions>({});
  const { layoutConfig } = useContext(LayoutContext);

  const finBertData = {
    "Analyst Update": 0.9603074193000793,
    "Company | Product News": 0.002390812383964658,
    Currencies: 0.0008924901485443115,
    Dividend: 0.001212208066135645,
    Earnings: 0.00563107430934906,
    "Energy | Oil": 0.0005957380635663867,
    "Fed | Central Banks": 0.0009940479649230838,
    Financials: 0.0006682887324132025,
    "General News | Opinion": 0.0005090037011541426,
    "Gold | Metals | Materials": 0.0010924474336206913,
    IPO: 0.004138212185353041,
    "Legal | Regulation": 0.0020489702001214027,
    "M&A | Investments": 0.0007734919199720025,
    Macro: 0.0004749912186525762,
    Markets: 0.0010347444331273437,
    "Personnel Change": 0.0017919237725436687,
    Politics: 0.0008830860024318099,
    "Stock Commentary": 0.0031345966272056103,
    "Stock Movement": 0.009746182709932327,
    "Treasuries | Corporate Debt": 0.0016803651815280318,
  };

  const applyLightTheme = () => {
    const lineOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    setLineOptions(lineOptions);
  };

  const applyDarkTheme = () => {
    const lineOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#ebedef",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(160, 167, 181, .3)",
          },
        },
        y: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(160, 167, 181, .3)",
          },
        },
      },
    };

    setLineOptions(lineOptions);
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (layoutConfig.colorScheme === "light") {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  }, [layoutConfig.colorScheme]);

  const formatCurrency = (value: number) => {
    return value?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="grid">
      <div className="col-12 lg:col-6 xl:col-8">
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">
                Browse/Select Audio Files
              </span>
              <div className="text-900 font-medium text-xl">File Upload</div>
            </div>
          </div>
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="audio/*"
            maxFileSize={1000000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          />
          <div className="search-button-padding">
            <Button
              className="search-button"
              label="Submit"
              icon="pi pi-check"
            />
          </div>
        </div>
      </div>
      <div className="col-12 lg:col-6 xl:col-4">
        <div className="card mb-0">
          <SeverityBar value={60} />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="text-900 font-medium text-xl">
                  RISK ASSESSMENT
                </div>
              </div>
              <div className="col-sm">
                <br />
                <Button
                  label="HIGH RISK"
                  className="p-button-outlined"
                  disabled
                  style={buttonStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 xl:col-6">
        <div className="card"></div>
        <div className="card">
          <div className="flex justify-content-between align-items-center mb-5">
            <h5>Financial Impact/Domain</h5>
          </div>
          <ul className="list-none p-0 m-0">
            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
              <div>
                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">
                  Space T-Shirt
                </span>
              </div>
              <div className="mt-2 md:mt-0 flex align-items-center">
                <div
                  className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style={{ height: "8px" }}
                >
                  <div
                    className="bg-orange-500 h-full"
                    style={{ width: "50%" }}
                  />
                </div>
                <span className="text-orange-500 ml-3 font-medium">%50</span>
              </div>
            </li>
            {/* {Object.entries(finBertData).map(([key, value]) => (
              <div key={key}>
                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">
                  {key}
                </span>
                <div className="mt-2 md:mt-0 flex align-items-center">
                <div
                  className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style={{ height: "50%"} }}
                >
                  <div
                    className="bg-orange-500 h-full"
                    style={{ width: "50%" }}
                  />
                </div>
                <span className="text-orange-500 ml-3 font-medium">%50</span>
              </div>
              </div>
            ))} */}
          </ul>
        </div>
      </div>

      <div className="col-12 xl:col-6">
        <div className="card"></div>

        <div className="card">
          <div className="flex align-items-center justify-content-between mb-4">
            <h5>Notifications</h5>
            <div>
              <Button
                type="button"
                icon="pi pi-ellipsis-v"
                className="p-button-rounded p-button-text p-button-plain"
                onClick={(event) => menu2.current?.toggle(event)}
              />
              <Menu
                ref={menu2}
                popup
                model={[
                  { label: "Add New", icon: "pi pi-fw pi-plus" },
                  { label: "Remove", icon: "pi pi-fw pi-minus" },
                ]}
              />
            </div>
          </div>

          <span className="block text-600 font-medium mb-3">TODAY</span>
          <ul className="p-0 mx-0 mt-0 mb-4 list-none">
            <li className="flex align-items-center py-2 border-bottom-1 surface-border">
              <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-dollar text-xl text-blue-500" />
              </div>
              <span className="text-900 line-height-3">
                Richard Jones
                <span className="text-700">
                  {" "}
                  has purchased a blue t-shirt for{" "}
                  <span className="text-blue-500">79$</span>
                </span>
              </span>
            </li>
            <li className="flex align-items-center py-2">
              <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-download text-xl text-orange-500" />
              </div>
              <span className="text-700 line-height-3">
                Your request for withdrawal of{" "}
                <span className="text-blue-500 font-medium">2500$</span> has
                been initiated.
              </span>
            </li>
          </ul>

          <span className="block text-600 font-medium mb-3">YESTERDAY</span>
          <ul className="p-0 m-0 list-none">
            <li className="flex align-items-center py-2 border-bottom-1 surface-border">
              <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-dollar text-xl text-blue-500" />
              </div>
              <span className="text-900 line-height-3">
                Keyser Wick
                <span className="text-700">
                  {" "}
                  has purchased a black jacket for{" "}
                  <span className="text-blue-500">59$</span>
                </span>
              </span>
            </li>
            <li className="flex align-items-center py-2 border-bottom-1 surface-border">
              <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-question text-xl text-pink-500" />
              </div>
              <span className="text-900 line-height-3">
                Jane Davis
                <span className="text-700">
                  {" "}
                  has posted a new questions about your product.
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
