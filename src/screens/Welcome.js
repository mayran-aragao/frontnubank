import React,{useState} from 'react';
import {Keyboard,StatusBar,View } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
`;
const Rolagem = styled.ScrollView`
    flex:1;
    background-color:#9400d3; 
`;
const PageHorizontal = styled.View`
    width:100%;
    height:25%;
    background-color:#8B008B;
`;
const RolagemHorizontal = styled.ScrollView`
    
    background-color:#9400d3;
`;
const Credito = styled.TouchableOpacity`
    flex:1;
    width:93%;
    height:220px;
    background-color:#FFF;
    border-radius:4px;
`;
const CreditoInside = styled.TouchableOpacity`
    flex:1;
    flex-direction:row;
    width:100%;
    height:61px;
    background-color:#FFF;
    border-radius:4px;
    align-items:center;
`;
const Touch = styled.TouchableOpacity`
    width:93%;
    margin-top: 20px;
    height:${props=>props.height}
    background-color:#FFF;
    border-radius:4px;
`;
const Botao = styled.TouchableOpacity`    
    width:${props=>props.wid};
    margin-left:25px;
    margin-top:${props=>props.margin};
    height:40px;
    border-radius: 5px;
    border:1px solid ${props=>props.cor}
    justify-content:center;
    align-items:center;
`;
const BotaoHorizontal = styled.TouchableOpacity`
    flex:1;
    flex-wrap:nowrap;
    justify-content:flex-end;
    width:89px;
    height:100px;
    margin-top:15px;
    margin-left:15px;
    margin-bottom:15px;
    background-color:#9932CC;
    border-radius:4px;
`;
const AjudaBotao = styled.TouchableOpacity`
    flex:1;
    justify-content:flex-end;
    width:89px;
    height:100px;
    margin-top:15px;
    margin-left:15px;
    margin-bottom:15px;
    margin-right:15px;
    background-color:#9932CC;
    border-radius:4px;
`;

const TextoCred = styled.Text`
    font-size:${props=>props.tam};
    color:${props=>props.cor};
    margin-left:70px;
    margin-top:${props=>props.top};
    
`;
const TextoSegundario = styled.Text`
    font-size:${props=>props.tam};
    color:${props=>props.cor};
    padding-top:${props=>props.dis};
    padding-left:25px;
    padding-right:40px;
`;
const TextVence = styled.Text`
    font-size:14px;
    color:#696969;
    padding-top:5px;
    padding-left:25px;
    font-weight:bold;
`;
const TextoBot = styled.Text`
    font-size:14px;
    color:${props=>props.cor};
    font-weight:bold;
`;
const BotaoTexto = styled.Text`
    font-size:12px;
    margin-left:10px;
    margin-bottom:5px;
    color:#FFF;
`;
const TituloLogo =styled.Image`
    width:40px;
    height:40px;
    background-color:#9400d3;
    margin-right:10px;
`;
const ImageCartao = styled.Image`
    width:25px;
    height:20px;
    margin-top:20px;
    margin-left:20px;
    resize-mode:stretch;
`;
const ImageSeguro = styled.Image`
    width:45px;
    height:40px;
    margin-top:20px;
    margin-left:20px;
    resize-mode:stretch;
`;
const ImageIcone = styled.Image`
    width:${props=>props.tam};
    height:${props=>props.alt};
    margin-bottom:${props=>props.dis};
    margin-left:10px;
    resize-mode:stretch;
`;
const Screen = (props) =>{
    
    return(
        <Page>
            <StatusBar backgroundColor="#68228B" barStyle="light-content"/>
            <Rolagem>
                <View alignItems={"center"}>
                    <Credito activeOpacity={0.9} >
                        <ImageCartao source={require('../images/cartao.png')} alignItems="center" />
                        <TextoCred cor="#696969" tam="16px" top="-20px">Cartão de Crédito</TextoCred>
                        <TextoSegundario cor="#696969"dis="12px" tam="14px">Fatura Fechada</TextoSegundario>
                        <TextoSegundario cor="red" dis="8px" tam="25px">R$ 1341,23</TextoSegundario>
                        <TextVence>Vence 24/02/2021</TextVence>
                        <CreditoInside activeOpacity={0.9}> 
                            <Botao margin="8px"activeOpacity={0.6} cor="#E94264" wid="40%">
                                <TextoBot cor="#F3041C">PAGAR FATURA</TextoBot>
                            </Botao>
                            <Botao margin="8px" activeOpacity={0.6} cor="#000" wid="35%">
                                <TextoBot cor="#000">PARCELAR</TextoBot>
                            </Botao>
                        </CreditoInside>
                    </Credito>

                    <Touch activeOpacity={0.9} height="150px">
                        <ImageCartao source={require('../images/conta.png')} alignItems="center" />
                        <TextoCred cor="#696969" tam="16px" top="-20px">Conta</TextoCred>
                        <TextoSegundario cor="#696969" dis="12px" tam="14px">Saldo disponível</TextoSegundario>
                        <TextoSegundario dis="12px" cor="black" tam="25px">R$ 25.191,42</TextoSegundario>
                    </Touch>

                    <Touch activeOpacity={0.9} height="200px">
                        <ImageCartao source={require('../images/emprestimo.png')} alignItems="center" />
                        <TextoCred cor="#696969" tam="16px" top="-20px">Empréstimo</TextoCred>
                        <TextoSegundario dis="30px" cor="black" tam="14px">Valor disponível de até</TextoSegundario>
                        <TextoSegundario dis="12px" cor="black" tam="25px">R$ 20.000,00</TextoSegundario>
                        <Botao margin="8px" activeOpacity={0.6} cor="purple" wid="55%">
                            <TextoBot cor="purple">SIMULAR EMPRÉSTIMO</TextoBot>
                        </Botao>
                    </Touch>
                    <Touch activeOpacity={0.9} height="200px">
                        <ImageSeguro source={require('../images/rewards.png')} alignItems="center" />
                        <TextoCred cor="purple" tam="22px" top="-25px">Rewards</TextoCred>
                        <TextoSegundario dis="30px" cor="black" tam="14px">Apague compras com pontos que nunca expiram.</TextoSegundario>
                        <Botao margin="18px" activeOpacity={0.6} cor="purple" wid="35%">
                            <TextoBot cor="purple">CONHECER</TextoBot>
                        </Botao>
                    </Touch>

                    <Touch activeOpacity={0.9} height="200px">
                        <ImageSeguro source={require('../images/seguro.png')} alignItems="center" />
                        <TextoCred cor="purple" tam="22px" top="-25px">Seguro de vida</TextoCred>
                        <TextoSegundario dis="30px" cor="black" tam="14px">Conheça Nubank Vida: um seguro simples e que cabe no bolso.</TextoSegundario>
                        <Botao margin="18px" activeOpacity={0.6} cor="purple" wid="35%">
                            <TextoBot cor="purple">CONHECER</TextoBot>
                        </Botao>
                    </Touch>
                </View>
            </Rolagem>

            <PageHorizontal>
                    <RolagemHorizontal horizontal={true}>
                        <View flex={1} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/pix.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Pix</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/pagar.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Pagar</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/indicar.png')} alignItems="center" dis="32px" tam="20px" alt="20px" />
                                <BotaoTexto>Indicar amigos</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/transferir.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Transferir</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/deposito.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Depositar</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/empre.png')} alignItems="center" dis="45px" tam="25px" alt="20px"/>  
                                <BotaoTexto>Emprestimo</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/virtual.png')} alignItems="center" dis="45px" tam="25px" alt="20px"/>
                                <BotaoTexto>Cartão virtual</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/recarga.png')} alignItems="center" dis="30px" tam="20px" alt="25px"/>
                                <BotaoTexto>Recarga de Celular</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/ajustar.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Ajustar limite</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/bloquear.png')} alignItems="center" dis="32px" tam="20px" alt="20px"/>
                                <BotaoTexto>Bloquear cartão</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/cobrar.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Cobrar</BotaoTexto>
                            </BotaoHorizontal>

                            <BotaoHorizontal activeOpacity={0.8}>
                                <ImageIcone source={require('../images/empre.png')} alignItems="center" dis="45px" tam="25px" alt="20px"/>
                                <BotaoTexto>Doação</BotaoTexto>
                            </BotaoHorizontal>

                            <AjudaBotao activeOpacity={0.8}>
                                <ImageIcone source={require('../images/ajuda.png')} alignItems="center" dis="45px" tam="20px" alt="20px"/>
                                <BotaoTexto>Me ajuda</BotaoTexto>
                            </AjudaBotao>

                        </View>
                    </RolagemHorizontal>
            </PageHorizontal>    
        </Page>
    );
}

Screen.navigationOptions = ({navigation})=>{
    
    
    return{
        title:"Olá, Mayran",
        headerRight:()=><TituloLogo source={require('../images/config.png')}/>,
    }
};
export default Screen;