import {
  SearchHomeBarContainer,
  SearchHomeBarTitle,
  SearchHomeBarTitleContainer,
  SearchHomeBarInput,
  SearchInput,
  SearchBarBackground,
SearchHomeBarLogo
} from './styles';


export default function SearchHomeBar() {

  return (
    <SearchHomeBarContainer>
      <SearchBarBackground />
      <SearchHomeBarTitleContainer>
        <SearchHomeBarTitle>
          Epicure works with the top <br />
          chef restaurants in Tel Aviv
        </SearchHomeBarTitle>
        <SearchHomeBarInput itemType='input'>
          <SearchHomeBarLogo />
          <SearchInput type="text" placeholder='Search for restaurant cuisine, chef'></SearchInput>
        </SearchHomeBarInput>
      </SearchHomeBarTitleContainer>
    </SearchHomeBarContainer>

  )
}


