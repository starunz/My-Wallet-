import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

//import api from "../../services/api";
import * as api from '../../services/api'
import useAuth from "../../hooks/useAuth";

import Header from "../../components/header/styleHeader/Header";
import { 
    Container,
    Transactions,
    Footer,
    Button,
    SingleTransaction,
    Date,
    Description,
    Value,
    Information,
    Balance,
    NoTransactions,
} from "../../components/styleWallet/style";

import { RemoveCircleOutline, AddCircleOutline } from "react-ionicons";

const Wallet = () => {

    const { auth } = useAuth();
    const [haveTransactions, setHaveTransactions] = useState(false);
    const [transactions, setTransactions] = useState(null);
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate()


    useEffect(() => {
        api.transactions(auth.token)
        .then((res) => {
            setTransactions(res.data);

            if (res.data.length !== 0) {
            setHaveTransactions(true);
            }
            calculateBalance();
        })
        .catch(() => {
            setHaveTransactions(false);
        });
    }, [haveTransactions]);

    function calculateBalance() {
        let entrys = 0;
        let exits = 0;
    
        transactions.forEach((transaction) => {
          if (transaction.type === 'entry') {
            entrys += transaction.value;
          } else {
            exits += transaction.value;
          }
        });
    
        const balance = entrys - exits;
        setBalance(balance.toFixed(2));
      }

    return (
        <Container>
        <Header />
  
        <Transactions>
          {haveTransactions ? (
            transactions.reverse().map((transaction, index) => (
              <SingleTransaction key={index}>
                <Information>
                  <Date>{transaction.date}</Date>
                  <Description>{transaction.description}</Description>
                </Information>
                <Information>
                  <Value status={`${transaction.type}`}>
                    {transaction.value.toFixed(2).replace(".", ",")}
                  </Value>
                </Information>
              </SingleTransaction>
            ))
          ) : (
            <NoTransactions>Não há registros de entrada ou saída</NoTransactions>
          )}

        <Balance haveTransactions={haveTransactions}>
          <p>SALDO</p>
          <Value status={`${balance >= 0 ?  'entry' : 'exit'}`}>
            {balance}
          </Value>
        </Balance>

        </Transactions>
  
        <Footer>
          <Button onClick={() => navigate('/add-entry')}>
            <span>
                <AddCircleOutline
                color={"#ffffff"}
                title={"Nova entrada"}
                height="25px"
                width="25px"
                />
            </span>
            <p>Nova <br/> entrada</p>
          </Button>
  
          <Button onClick={() => navigate('/add-exit')}>
            <span>
                <RemoveCircleOutline
                color={"#ffffff"}
                title={"Nova saída"}
                height="25px"
                width="25px"
                />
            </span>
            <p>Nova <br/> saída</p>
          </Button>
        </Footer>
      </Container>
    );
}

export default Wallet;