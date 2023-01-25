import styled from "styled-components";
import { GlobalButton } from "../../../shared/GlobalComponents";

export const Container = styled.div`
  .gigInfoCard {
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.375rem;
    background: #fff;
    cursor: pointer;
  }
  .gigInfoCard__iconBox {
    border-radius: 50%;
    background: #e9eeff;
    width: 2.1875rem;
    height: 2.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gigInfoCard__icon {
    font-size: 1.1rem;
    color: #4668d6;
  }
  .gigInfocard__draftData {
    padding: 0.7rem;
    border: 1px solid #e3e3e3;
    border-radius: 3.125rem;
    margin-top: 1rem;
  }
  .container__card{
    padding: 0 30px;
  }
  .gigInfoCard__wrapper{
    margin-top: 15px;
  }
  .gigInfoCard__wrapper__two{
    margin-left: 40px;
  }
  .mile__stone__heading{
    margin-top: 15px;
  }
  .gigInfoCard__one{
    margin-left: 40px;
    margin-bottom: 20px;
  }
  .gigInfoCard__two{
    margin-top: 20px;
    margin-left: 40px;
    position: relative;
  }
  .gigInfoCard__edit__icon {
    position: absolute;
    right: 0;
    top: -10px;
  }
  .gigInfoCard__three{
    margin-top: 20px;
    margin-left: 40px;
    position: relative;
  }
  .card__section{
    display: flex;
  }
  .card__image {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    object-fit: cover;
    margin-top: 22px;
    background: #F4F4F4;
    position: relative;
  }
  .company__img{
    box-sizing: border-box;
    position: absolute;
    width: 89px;
    left: 20px;
    top: 45px;
  }
  .span__style{
    color: #0C0E17;
    font-weight: 600;
    font-size: 13px;
    margin-left: 5px
  }
  .text__style{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #0C0E17
  }
  .fileArchive__container{
    padding: 30px;
  }
  .fileArchive__one{
    margin-top: 20px;
    position: relative;
  }
  .fileArchive__heading{
    margin-top: 30px;
  }
  .fileArchive__heading__style{
    font-size: 12px;
  }
  .fileArchive__image{
    display: flex;
  }
  .more__icon__style{
    margin-left: auto;
    cursor: pointer;
  }
  .fileArchive__image__one{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .icon__style{
    width: 100px
  }
  .fileArchive__image__one__heading{
    margin-top: 10px;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
  .fileArchive__image__one__para{
    font-size: 10px;
  }
  .upload__file__style{
    width: 250px;
    height: 240px;
    margin-left: 20px;
  }
  .upload__file__icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 0;
  }
  .upload__icons{
    width: 27px;
  }
  .upload__heading{
    color: #A6A6A6;
    margin-top: 10px;
  }
  .upload__para{
    color: #4668D6;
    font-weight: bold;
    margin-top: 10px;
  }
  .modal__head{
    display: flex;
    justify-content: space-between;
  }
  .modal__icon__style{
    cursor: pointer;
  }
  .modal__list__one{
    display: flex;
  }
  .modal_list_style{
    list-style-type: none;
  }
`;

export const SortButton = styled(GlobalButton)`
  padding: 0;
  &.ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    border: 1px solid #d3d3d3;
  }

  &.ant-btn {
    border-color: #d3d3d3;
    color: black;
  }
`;
