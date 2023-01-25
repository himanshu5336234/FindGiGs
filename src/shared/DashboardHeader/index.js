import { Avatar, Dropdown, Grid, Menu, Modal } from "antd";
import React, { useState } from "react";
import {
    GlobalSearchBar,
    GlobalSubText,
    GlobalTextP1,
    GlobalTextP3,
    GlobalTextP5,
    GlobalTitle,
} from "../GlobalComponents";
import { NotificationIcon, SearchIcon } from "../icons";
import {
    CustomHeader,
    CustomMenu,
    IconButton,
    RecentButtons,
    RecentButtonsContainer,
    RecentButtonsImg,
    TryingSearchContainer,
    TrySearching,
} from "./StyleSheet";
import {
    UserOutlined,
    SettingOutlined,
    QuestionOutlined,
    LogoutOutlined,
    MenuOutlined,
    MessageOutlined,
    LockOutlined,
    SecurityScanOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/auth/authSlice";
import GlobalModal from "../GlobalModal";
import recentSearch from "../../assets/images/enterprise/recentSearch.svg";
import recent from "../../assets/images/enterprise/recent.svg";
import trySearchingImg from "../../assets/images/enterprise/trySearching.svg";
import RouteConstant from "../../router/constants";
import { searchGig } from "../../api/searchGig/searchGig";
const { useBreakpoint } = Grid;

const iconStyle = {
    color: "#4668D6",
    marginRight: "10px",
    fontSize: "1rem",
};

function DashboardHeader({ collapsed, setCollapsed }) {
  const screens = useBreakpoint();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const userType = localStorage.getItem("type");

    const logout = () => {
        localStorage.clear();
        dispatch(setLogout());
        navigate("/login/enterprise");
    };

  const menu = (
    <CustomMenu
      items={[
        {
          key: 1,
          label: (
            <GlobalSubText
              onClick={() => navigate("/home/account-settings")}
              className="margin-b0"
            >
              <UserOutlined style={iconStyle} />
              <span>Company Details</span>
            </GlobalSubText>
          ),
        },
        {
          key: 2,
          label: (
            <GlobalSubText
              onClick={() => navigate("/home/account-settings")}
              className="margin-b0"
            >
              <FileTextOutlined style={iconStyle} />
              <span>Tax & Billing Details</span>
            </GlobalSubText>
          ),
        },
        {
          key: 3,
          label: (
            <GlobalSubText
              onClick={() => navigate("/home/account-settings")}
              className="margin-b0"
            >
              <SecurityScanOutlined style={iconStyle} />
              <span>Security</span>
            </GlobalSubText>
          ),
        },
        {
          key: 4,
          label: (
            <GlobalSubText
              onClick={() => navigate("/home/account-settings")}
              className="margin-b0"
            >
              <LockOutlined style={iconStyle} />
              <span>Privacy Policy</span>
            </GlobalSubText>
          ),
        },
        {
          key: 5,
          label: (
            <GlobalSubText
              onClick={() => navigate("/home/account-settings")}
              className="margin-b0"
            >
              <MessageOutlined style={iconStyle} />
              <span>HelpDesk</span>
            </GlobalSubText>
          ),
        },
        {
          key: "6",
          label: (
            <GlobalSubText onClick={logout} className="margin-b0">
              <LogoutOutlined style={iconStyle} />
              <span>Logout</span>
            </GlobalSubText>
          ),
        },
      ]}
    />
  );

  const freelancerMenu = (
    <CustomMenu
      items={[
        {
          key: "1",
          label: (
            <GlobalSubText
              className="margin-b0"
              onClick={() => navigate("/home/my-profile")}
            >
              <UserOutlined style={iconStyle} />
              <span>My Profile</span>
            </GlobalSubText>
          ),
        },
        {
          key: "2",
          label: (
            <GlobalSubText
              onClick={() => navigate("/home/account-settings")}
              className="margin-b0"
            >
              <SettingOutlined style={iconStyle} />
              <span>Settings</span>
            </GlobalSubText>
          ),
        },
        {
          key: "3",
          label: (
            <GlobalSubText className="margin-b0">
              <QuestionOutlined style={iconStyle} />
              <span>Help</span>
            </GlobalSubText>
          ),
        },
        {
          key: "6",
          label: (
            <GlobalSubText onClick={logout} className="margin-b0">
              <LogoutOutlined style={iconStyle} />
              <span>Logout</span>
            </GlobalSubText>
          ),
        },
      ]}
    />
  );

  const recentSearchesData = ["Java", "Javascript", "HTML", "Angular", "CSS"];
  const popularSearchesData = [
    "FullStack Developer",
    "Data Science",
    "Data Science",
    "Backend Developer",
  ];
  const TrySearchingData = [
    "Data Analyst",
    "Data Scientist",
    "Big Data",
    "Data Collection",
  ];

  const SearchResult = useSelector((state) => state.searchGig.results);
  const freelancer_job_role = {
    1: "Frontend Developer",
    2: "Backend Developer",
    3: "Devops",
    4: "Data Engineer",
    5: "Data Scientist",
    6: "Full Stack Developer",
    7: "Data Analyst",
    8: "Quality Assurance",
    9: "UI/UX Designer",
    10: "Others",
  };

  const searchSuggestions = [
    ...new Set(
      SearchResult.map(
        (item) =>
          item.skill ||
          freelancer_job_role[item.freelancer_job_role] ||
          item.title
      )
    ),
  ];

  console.log(searchSuggestions, SearchResult, "searchSuggestions");
  const handleSearch = (e) => {
    if (e.target?.value?.length > 2) {
      dispatch(searchGig({ search_str: e.target.value }));
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };
  const handleNavigate = (search) => {
    navigate(
      RouteConstant.HOME + "/" + RouteConstant.SEARCH_RESULTS + "/" + search
    );
        setModalVisible(false);
    };

    return (
        <CustomHeader ismobile={screens?.xs?.toString()} collapsed={collapsed}>
            <div className="dashboardHeader__container">
                {screens?.xs && (
                    <MenuOutlined
                        className="dashboardHeader__hamburger"
                        onClick={() => setCollapsed(false)}
                    />
                )}
                <div className="container">
                    {!screens?.xs ? (
                        <>
                            <GlobalSearchBar
                                suffix={<SearchIcon />}
                                placeholder="Search..."
                                // onClick={() => setModalVisible(true)}
                                onChange={handleSearch}
                            />
                            <GlobalModal
                                visible={modalVisible}
                                onOk={() => setModalVisible(false)}
                                onCancel={() => setModalVisible(false)}
                                maskStyle={{
                                    backgroundColor: "rgba(70, 104, 214, 0.3)",
                                    width: "calc(100% - 80px)",
                                    marginLeft: "auto",
                                    top: "5rem",
                                }}
                                wrapClassName="searchBox"
                                maskClosable={() => setModalVisible(false)}
                            >
                                <GlobalTextP3>Popular Searches</GlobalTextP3>
                                <RecentButtonsContainer>
                                    {popularSearchesData.map((data) => (
                                        <>
                                            <RecentButtons>
                                                <RecentButtonsImg
                                                    src={recentSearch}
                                                />
                                                {data}
                                            </RecentButtons>
                                        </>
                                    ))}
                                </RecentButtonsContainer>
                                {searchSuggestions.length ? (
                                    <>
                                        <GlobalTextP3>
                                            Try Searching for
                                        </GlobalTextP3>
                                        <TryingSearchContainer>
                                            {searchSuggestions.map((data) => (
                                                <>
                                                    <TrySearching
                                                        onClick={() =>
                                                            handleNavigate(data)
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {data}
                                                        <RecentButtonsImg
                                                            src={
                                                                trySearchingImg
                                                            }
                                                            alt="Try searching"
                                                        />
                                                    </TrySearching>
                                                </>
                                            ))}
                                        </TryingSearchContainer>
                                    </>
                                ) : (
                                    <div></div>
                                )}
                            </GlobalModal>
                        </>
                    ) : null}
                    <IconButton icon={<NotificationIcon />}></IconButton>
                    <div className="profile">
                        <Dropdown
                            overlay={
                                userType !== "freelancer"
                                    ? menu
                                    : freelancerMenu
                            }
                            placement="bottomLeft"
                            trigger={["click"]}
                        >
                            <Avatar
                                size={screens?.sm ? 45 : 34}
                                icon={<UserOutlined />}
                                style={{ cursor: "pointer" }}
                            />
                        </Dropdown>
                        {!screens?.xs ? (
                            <div className="profile__details">
                                <p>
                                    {userData?.first_name} {userData?.last_name}
                                </p>
                                {/* <p>CEO Group</p> */}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </CustomHeader>
    );
}

export default DashboardHeader;
