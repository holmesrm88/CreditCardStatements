package com.nextcapital.recruiting.model;


public class CreditCardCharge {

    private String name;
    private int occurrance;
    private String cost;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getOccurrance() {
        return occurrance;
    }

    public void setOccurrance(int occurrance) {
        this.occurrance = occurrance;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }
}
