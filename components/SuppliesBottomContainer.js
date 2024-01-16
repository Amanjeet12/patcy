/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductFeatures, ProductSpecification} from '../constant/data';
import {SIZES} from '../constant/theme';

const SuppliesBottomContainer = () => {
  const [activeTab, setActiveTab] = useState('description'); // 'description' or 'specification'

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: SIZES.width * 0.021,
        }}>
        <TouchableOpacity
          style={[
            styles.boxContainer,
            {
              width: '50%',
              backgroundColor: activeTab === 'description' ? '#FFC6C6' : '#fff',
              borderRadius: SIZES.width * 0.013,
            },
          ]}
          onPress={() => handleTabPress('description')}>
          <Text style={styles.text}>Product Description</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.boxContainer,
            {
              width: '50%',
              backgroundColor:
                activeTab === 'specification' ? '#FFC6C6' : '#fff',
              borderRadius: 5,
            },
          ]}
          onPress={() => handleTabPress('specification')}>
          <Text style={[styles.text]}>Specification</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'description' ? (
        <>
          <View style={{marginTop: SIZES.width * 0.039}}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Details
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                padding: SIZES.width * 0.039,
                borderRadius: 10,
              }}>
              <Text
                style={[
                  styles.description,
                  {
                    fontSize: SIZES.width * 0.026,
                    color: '#8C8C8C',
                    lineHeight: SIZES.width * 0.041,
                  },
                ]}>
                PAWPEACE is a full-service animal care facility dedicated to
                consistently providing high customer satisfaction by rendering
                excellent service, quality pet care, and furnishing a fun,
                clean, enjoyable atmosphere at an acceptable price. We will
                maintain a friendly creative work environment which respects
                diversity, ideas. Read more...
              </Text>
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Product Features
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: '10',
              }}>
              {ProductFeatures.map((item, index) => (
                <View key={item.id} style={{marginRight: SIZES.width * 0.026}}>
                  <Text
                    style={[
                      styles.description,
                      {
                        paddingHorizontal: SIZES.width * 0.026,
                        borderWidth: 0.3,
                        borderColor: '#FFC6C6',
                        backgroundColor: '#fff',
                        marginBottom: SIZES.width * 0.026,
                        paddingVertical: 3,
                        borderRadius: SIZES.width * 0.026,
                      },
                    ]}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Technical Details
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: SIZES.width * 0.041,
                gap: SIZES.width * 0.026,
                padding: SIZES.width * 0.026,
              }}>
              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Size
                </Text>
                <Text style={styles.description}>100g</Text>
              </View>
              <View style={styles.border} />
              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Pet life stage
                </Text>
                <Text style={styles.description}>Junior to Senior</Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Breed recommendation
                </Text>
                <Text style={styles.description}>All cat and dog breeds</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: SIZES.width * 0.051,
              marginBottom: SIZES.width * 0.26,
            }}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Additional Details
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: SIZES.width * 0.041,
                gap: SIZES.width * 0.026,
                padding: SIZES.width * 0.026,
              }}>
              <View style={styles.flexBox}>
                <Text style={[styles.description]}>
                  Add directly to the food.
                </Text>
              </View>
              <View style={styles.border} />
              <View style={styles.flexBox}>
                <Text style={[styles.description]}>
                  Use daily without exceeding the recommended amount for optimal
                  benefits.
                </Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={[styles.description]}>
                  Do not use to pregnant dogs/cats and animals with severe
                  kidney diseases.
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Ingradients
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: '10',
              }}>
              {ProductSpecification.map((item, index) => (
                <View key={item.id} style={{marginRight: 10}}>
                  <Text
                    style={[
                      styles.description,
                      {
                        paddingHorizontal: SIZES.width * 0.026,
                        borderWidth: 0.3,
                        borderColor: '#FFC6C6',
                        backgroundColor: '#fff',
                        marginBottom: SIZES.width * 0.026,
                        paddingVertical: 3,
                        borderRadius: SIZES.width * 0.026,
                      },
                    ]}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Nutritional Analysis
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: SIZES.width * 0.041,
                gap: SIZES.width * 0.026,
                padding: SIZES.width * 0.026,
              }}>
              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Protein
                </Text>
                <Text style={styles.description}>5.5%</Text>
              </View>
              <View style={styles.border} />
              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Fat
                </Text>
                <Text style={styles.description}>2.8%</Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Fiber{' '}
                </Text>
                <Text style={styles.description}>5%</Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Inorganic matter{' '}
                </Text>
                <Text style={styles.description}>11%</Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={[styles.description, {color: '#8C8C8C'}]}>
                  Humidity{' '}
                </Text>
                <Text style={styles.description}>15%</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: SIZES.width * 0.051,
              marginBottom: SIZES.width * 0.26,
            }}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
              ]}>
              Recommended Dose
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: SIZES.width * 0.041,
                gap: SIZES.width * 0.026,
                padding: SIZES.width * 0.026,
              }}>
              <View style={styles.flexBox}>
                <Text style={styles.description}>
                  Small dogs (<Text style={{color: 'red'}}> &lt;10kg</Text>) and
                  cats
                </Text>

                <Text style={styles.description}>5.5%</Text>
              </View>
              <View style={styles.border} />
              <View style={styles.flexBox}>
                <Text style={styles.description}>
                  Medium dogs (
                  <Text style={{color: 'red'}}> &lt;from 11 to 23kg</Text>)
                </Text>
                <Text style={styles.description}>2.8%</Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={styles.description}>
                  Large dogs (
                  <Text style={{color: 'red'}}> &lt;from 24 to 34kg</Text>)
                </Text>
                <Text style={styles.description}>5%</Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <Text style={styles.description}>
                  Very large dogs(
                  <Text style={{color: 'red'}}> &lt; 34kg)</Text>)
                </Text>
                <Text style={styles.description}>11%</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default SuppliesBottomContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.width * 0.051,
    paddingHorizontal: SIZES.width * 0.041,
  },
  boxContainer: {
    height: SIZES.width * 0.115,
    justifyContent: 'center',
    padding: 3,
    paddingHorizontal: SIZES.width * 0.013,
  },
  text: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
    paddingHorizontal: 30,
    textAlign: 'center',
    paddingVertical: SIZES.width * 0.026,
    borderRadius: 5,
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    height: 0.3,
    backgroundColor: '#FFC6C6',
  },
});
