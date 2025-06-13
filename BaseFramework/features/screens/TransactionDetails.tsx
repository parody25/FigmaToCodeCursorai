import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Label } from '../../features/components/label';
import { Tag } from '../../features/components/tag';
import { Button } from '../../features/components/custom-button';
import { Dropdown } from '../../features/components/dropdown';

const TransactionDetails = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Label id="transaction-title" text="Transaction details" variant={"titleM"} style={styles.header} />
      <View style={styles.centered}>
        <Label id="merchant-name" text="Costa Coffee" variant={"titleL"} style={styles.merchantName} />
        <Image
          source={require('../assets/image@3x.png')} // Placeholder for Costa Coffee logo
          style={styles.logo}
          resizeMode="contain"
        />
        <Label id="amount" text="﷼ 23.00" variant={"titleXL"} style={styles.amount} />
        <Label id="date-time" text="10 Dec, 2024 · 01:00 PM" variant={"bodyRegularM"} style={styles.dateTime} />
        <Tag label="Completed" type="success" size="medium" id="completed-tag" customContainerStyle={styles.statusTag} />
      </View>
      <View style={styles.actionsRow}>
        <Button id="download-btn" label="Download" variant="primary" size="large" style={styles.actionButton} onPress={() => {}} />
        <Button id="remind-btn" label="Remind expense" variant="secondary" size="large" style={styles.actionButton} onPress={() => {}} />
        <Button id="dispute-btn" label="Dispute" variant="secondary" size="large" style={styles.actionButton} onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <Dropdown
          id="budgeting-dropdown"
          placeholder="Budgeting"
          inputText="Shopping"
          onPress={() => {}}
        />
      </View>
      <View style={styles.section}>
        <Label id="transaction-details-title" text="Transaction details" variant={"titleS"} style={styles.sectionTitle} />
        <View style={styles.detailRow}><Label id="type-label" text="Transaction type" variant={"bodyRegularM"} /><Label id="type-value" text="POS transaction" variant={"bodyMediumM"} /></View>
        <View style={styles.detailRow}><Label id="account-label" text="Account" variant={"bodyRegularM"} /><Label id="account-value" text="OnePack Account ···· 3462" variant={"bodyMediumM"} /></View>
        <View style={styles.detailRow}><Label id="currency-label" text="Currency" variant={"bodyRegularM"} /><Label id="currency-value" text="SAR" variant={"bodyMediumM"} /></View>
        <View style={styles.detailRow}><Label id="exchange-label" text="Exchange rate" variant={"bodyRegularM"} /><Label id="exchange-value" text="1.00" variant={"bodyMediumM"} /></View>
        <View style={styles.detailRow}><Label id="amount-label" text="1.00 SAR" variant={"bodyRegularM"} /></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B1FA1',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    color: '#fff',
    marginBottom: 16,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center',
    marginBottom: 24,
  },
  merchantName: {
    color: '#fff',
    marginBottom: 8,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  amount: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dateTime: {
    color: '#fff',
    marginBottom: 8,
  },
  statusTag: {
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    color: '#4B1FA1',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});

export default TransactionDetails; 