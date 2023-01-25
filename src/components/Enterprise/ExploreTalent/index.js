import { Col, Grid, Row, Select, Space, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getAllFreelancersList,
  getRecommendedFreelancersList,
} from "../../../api/enterprise/gigsApis";
import {
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import FreelancerInfo from "./FreelancerInfo";
import { Container, CustomSelect, CustomTabs, SortSelect } from "./Stylesheet";

const { TabPane } = Tabs;
const { Option } = Select;
const { useBreakpoint } = Grid;

const freelancerInfoData = [
  {
    id: 1,
    first_name: "Kalyan",
    last_name: "Kuramana",
    designation: "Full Stack developer",
    skills: ["React Js", "Python", "Java", "JavaScript", "Vue Js", "Redux"],
    rating: 4.5,
    wage_rate: "1500",
    profile_completion: 70,
  },
  {
    id: 2,
    first_name: "Kalyan",
    last_name: "Kuramana",
    designation: "Full Stack developer",
    skills: ["React Js", "Python", "Java", "JavaScript"],
    rating: 4.5,
    wage_rate: "1500",
    profile_completion: 70,
  },
  {
    id: 3,
    first_name: "Kalyan",
    last_name: "Kuramana",
    designation: "Full Stack developer",
    skills: ["React Js", "Python"],
    rating: 4.5,
    wage_rate: "1500",
    profile_completion: 70,
  },
  {
    id: 4,
    first_name: "Kalyan",
    last_name: "Kuramana",
    designation: "Full Stack developer",
    skills: ["React Js", "Python", "Java", "JavaScript", "Vue Js", "Redux"],
    rating: 4.5,
    wage_rate: "1500",
    profile_completion: 70,
  },
];

const FilterSort = () => {
  const onChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearchSelect = (value) => {
    console.log("search:", value);
  };
  return (
    <div className="exploreTalent__filterSortContainer">
      <Space size={"small"} className="exploreTalent__filterContainer">
        <CustomSelect
          showSearch
          placeholder="Skills"
          optionFilterProp="children"
          onChange={onChangeSelect}
          onSearch={onSearchSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="JavaScript">JavaScript</Option>
          <Option value="React">React</Option>
        </CustomSelect>
        <CustomSelect
          showSearch
          placeholder="Experience"
          optionFilterProp="children"
          onChange={onChangeSelect}
          onSearch={onSearchSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="JavaScript">JavaScript</Option>
          <Option value="React">React</Option>
        </CustomSelect>
        <CustomSelect
          showSearch
          placeholder="Wage Rate"
          optionFilterProp="children"
          onChange={onChangeSelect}
          onSearch={onSearchSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="JavaScript">JavaScript</Option>
          <Option value="React">React</Option>
        </CustomSelect>
        <CustomSelect
          showSearch
          placeholder="Role"
          optionFilterProp="children"
          onChange={onChangeSelect}
          onSearch={onSearchSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="JavaScript">JavaScript</Option>
          <Option value="React">React</Option>
        </CustomSelect>
      </Space>
      <Space size={0} align="center">
        <GlobalSubText color="#909090" className="margin-b0">
          Sort by:
        </GlobalSubText>
        <SortSelect
          defaultValue="Recent"
          onChange={onChangeSelect}
          bordered={false}
        >
          <Option value="Recent">Recent</Option>
          <Option value="one">last 1 month</Option>
        </SortSelect>
      </Space>
    </div>
  );
};

function ExploreTalent() {
  const { state: hideRecommended } = useLocation();
  console.log(hideRecommended, "hide recommended");
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("1");
  const freelancersList = useSelector(
    (state) => state.gigsEnterprise.freelancersList
  );

  const onChange = (key) => {
    setSelectedTab(key);
  };

  useEffect(() => {
    if (selectedTab === "1") {
      dispatch(getAllFreelancersList());
    } else if (selectedTab === "2") {
      dispatch(getRecommendedFreelancersList());
    }
  }, [selectedTab]);

  return (
    <Container>
      <div className="exploreTalent__head">
        <p className="exploreTalent__title">Showing all listed freelancers</p>
        {screens?.sm && (
          <div className="exploreTalent__saveButton">
            <GlobalTextP5 color="#4668D6" className="margin-b0" weight="600">
              Saved Profiles
            </GlobalTextP5>
          </div>
        )}
      </div>
      <CustomTabs defaultActiveKey="1" onChange={onChange} animated type="line">
        <TabPane tab="All" key="1">
          <FilterSort />
          {freelancersList?.length === 0 ? (
            <GlobalTextP2 className="margin-t3">No Data Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]} className="margin-t3">
              {freelancersList?.map((data) => (
                <Col xs={24} sm={12} md={12} lg={6}>
                  <FreelancerInfo freelancerData={data} key={data?.id} />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
        {!hideRecommended && (
          <TabPane tab="Recommended" key="2">
            <FilterSort />
            {freelancersList?.length === 0 ? (
              <GlobalTextP2 className="margin-t3">No Data Found</GlobalTextP2>
            ) : (
              <Row gutter={[16, 16]} className="margin-t3">
                {freelancersList?.map((data) => (
                  <Col xs={24} sm={12} md={12} lg={6}>
                    <FreelancerInfo
                      freelancerData={data}
                      key={data?.freelancer_id}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </TabPane>
        )}
      </CustomTabs>
    </Container>
  );
}

export default ExploreTalent;
