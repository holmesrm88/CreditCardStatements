package com.nextcapital.recruiting;

public class main {
    public static void main(String[] args){
        StatementApi sa = new StatementApi();
        ChargeService cs = new ChargeService(sa);
    }
}
